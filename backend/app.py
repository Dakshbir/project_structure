# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.aqi_calculator import get_current_aqi, get_forecast_aqi, get_historical_aqi

app = Flask(__name__)
CORS(app)

@app.route('/api/current', methods=['GET'])
def current_aqi():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({'error': 'Missing coordinates'}), 400
    
    data = get_current_aqi(float(lat), float(lon))
    return jsonify(data.to_dict('records')[0] if data is not None else {'error': 'Failed to fetch data'})

@app.route('/api/forecast', methods=['GET'])
def forecast_aqi():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({'error': 'Missing coordinates'}), 400
    
    data = get_forecast_aqi(float(lat), float(lon))
    return jsonify(data.to_dict('records') if data is not None else {'error': 'Failed to fetch data'})

@app.route('/api/historical', methods=['GET'])
def historical_aqi():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    start = request.args.get('start')
    end = request.args.get('end')
    
    if not all([lat, lon, start, end]):
        return jsonify({'error': 'Missing parameters'}), 400
    
    data = get_historical_aqi(float(lat), float(lon), int(start), int(end))
    return jsonify(data if data is not None else {'error': 'Failed to fetch data'})

if __name__ == '__main__':
    app.run(debug=True)