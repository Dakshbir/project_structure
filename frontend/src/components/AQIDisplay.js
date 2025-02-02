import React from 'react';

const AQIDisplay = ({ data }) => {
    const getColorClass = (aqi) => {
        if (aqi <= 50) return 'good';
        if (aqi <= 100) return 'moderate';
        if (aqi <= 150) return 'sensitive';
        if (aqi <= 200) return 'unhealthy';
        if (aqi <= 300) return 'very-unhealthy';
        return 'hazardous';
    };

    return (
        <div className={`aqi-display ${getColorClass(data.Final_AQI)}`}>
            <div className="aqi-main">
                <h3>AQI: {data.Final_AQI}</h3>
                <p className="category">{data.AQI_Category}</p>
            </div>
            <div className="pollutants">
                <div className="pollutant">
                    <span>PM2.5</span>
                    <span>{data.PM2_5_AQI}</span>
                </div>
                <div className="pollutant">
                    <span>PM10</span>
                    <span>{data.PM10_AQI}</span>
                </div>
                <div className="pollutant">
                    <span>NO2</span>
                    <span>{data.NO2_AQI}</span>
                </div>
                <div className="pollutant">
                    <span>O3</span>
                    <span>{data.O3_AQI}</span>
                </div>
                <div className="pollutant">
                    <span>CO</span>
                    <span>{data.CO_AQI}</span>
                </div>
                <div className="pollutant">
                    <span>SO2</span>
                    <span>{data.SO2_AQI}</span>
                </div>
            </div>
            {data.datetime && (
                <div className="timestamp">
                    {new Date(data.datetime).toLocaleString()}
                </div>
            )}
        </div>
    );
};

export default AQIDisplay;


