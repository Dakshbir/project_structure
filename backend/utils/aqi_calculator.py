import requests
import pandas as pd
from datetime import datetime
from config import Config


def calculate_sub_index(pollutant, concentration):
    """Calculate sub-index for each pollutant based on its concentration"""
    breakpoints = {
        'co': {'concentrations': [0, 4.4, 9.4, 12.4, 15.4, 30.4, 40.4, 50.4],
               'aqi': [0, 50, 100, 150, 200, 300, 400, 500]},
        'no2': {'concentrations': [0, 53, 100, 360, 649, 1249, 1649, 2049],
                'aqi': [0, 50, 100, 150, 200, 300, 400, 500]},
        'pm10': {'concentrations': [0, 54, 154, 254, 354, 424, 504, 604],
                 'aqi': [0, 50, 100, 150, 200, 300, 400, 500]},
        'pm2_5': {'concentrations': [0, 12.0, 35.4, 55.4, 150.4, 250.4, 350.4, 500.4],
                  'aqi': [0, 50, 100, 150, 200, 300, 400, 500]},
        'o3': {'concentrations': [0, 54, 70, 85, 105, 200, 404, 504],
               'aqi': [0, 50, 100, 150, 200, 300, 400, 500]},
        'so2': {'concentrations': [0, 35, 75, 185, 304, 604, 804, 1004],
                'aqi': [0, 50, 100, 150, 200, 300, 400, 500]}
    }
    
    if pollutant not in breakpoints:
        return None
    
    bp = breakpoints[pollutant]
    for i in range(len(bp['concentrations']) - 1):
        if bp['concentrations'][i] <= concentration <= bp['concentrations'][i + 1]:
            aqi_high = bp['aqi'][i + 1]
            aqi_low = bp['aqi'][i]
            conc_high = bp['concentrations'][i + 1]
            conc_low = bp['concentrations'][i]
            
            sub_index = ((aqi_high - aqi_low) / (conc_high - conc_low)) * (concentration - conc_low) + aqi_low
            return round(sub_index, 2)
    
    return None

def get_aqi_category(aqi):
    """Get AQI category based on the value"""
    if aqi <= 50:
        return "Good"
    elif aqi <= 100:
        return "Moderate"
    elif aqi <= 150:
        return "Unhealthy for Sensitive Groups"
    elif aqi <= 200:
        return "Unhealthy"
    elif aqi <= 300:
        return "Very Unhealthy"
    else:
        return "Hazardous"

def process_aqi_data(components):
    """Process raw AQI data and calculate indices"""
    co_mg_m3 = components['co'] / 1000
    
    sub_indices = {
        'CO_AQI': calculate_sub_index('co', co_mg_m3),
        'NO2_AQI': calculate_sub_index('no2', components['no2']),
        'O3_AQI': calculate_sub_index('o3', components['o3']),
        'SO2_AQI': calculate_sub_index('so2', components['so2']),
        'PM2.5_AQI': calculate_sub_index('pm2_5', components['pm2_5']),
        'PM10_AQI': calculate_sub_index('pm10', components['pm10'])
    }
    
    final_aqi = max(value for value in sub_indices.values() if value is not None)
    return {**components, **sub_indices, 'Final_AQI': final_aqi, 'AQI_Category': get_aqi_category(final_aqi)}

def get_current_aqi(lat, lon):
    """Get current AQI data for given coordinates"""
    url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={Config.API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        components = data['list'][0]['components']
        processed_data = process_aqi_data(components)
        return pd.DataFrame([processed_data])
    
    return None

def get_forecast_aqi(lat, lon):
    """Get AQI forecast data for given coordinates"""
    url = f"http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid={Config.API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        processed_data = []
        
        for entry in data['list']:
            components = entry['components']
            processed = process_aqi_data(components)
            processed['datetime'] = datetime.fromtimestamp(entry['dt'])
            processed_data.append(processed)
        
        return pd.DataFrame(processed_data)
    
    return None

def get_historical_aqi(lat, lon, start, end):
    """Get historical AQI data for given coordinates and time range"""
    url = f"http://api.openweathermap.org/data/2.5/air_pollution/history?lat={lat}&lon={lon}&start={start}&end={end}&appid={Config.API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        processed_data = []
        
        for entry in data['list']:
            components = entry['components']
            processed = process_aqi_data(components)
            processed['datetime'] = datetime.fromtimestamp(entry['dt'])
            processed_data.append(processed)
        
        return processed_data
    
    return None