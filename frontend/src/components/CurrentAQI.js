
import { FaCloud } from 'react-icons/fa';





import React, { useState, useEffect } from 'react';

import LocationPicker from './LocationPicker'; // Location Picker component

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../styles/main.css'; // Import the CSS for custom styling



const CurrentAQI = () => {

  const [data, setData] = useState(null);

  const [location, setLocation] = useState(null);



  useEffect(() => {

    if (location) {

      fetch(`https://Dakshbir.github.io/project_structure/api/current?lat=${location.lat}&lon=${location.lon}`)

        .then(res => res.json())

        .then(setData)

        .catch(console.error);

    }

  }, [location]);



  // Function to get the color based on AQI value

  const getAQIColor = (aqi) => {

    if (aqi <= 50) return 'green';

    if (aqi <= 100) return 'yellow';

    if (aqi <= 150) return 'orange';

    if (aqi <= 200) return 'red';

    if (aqi <= 300) return 'purple';

    return 'maroon'; // For AQI above 300

  };



  return (

    <div className="current-aqi-container">

      <h2 className="heading"><FaCloud style={{ color: '#007bff', marginRight: '10px' }} />
                         Current AQI</h2>

      <LocationPicker onLocationSelect={setLocation} />

      

      {data && (

        <div className="aqi-display" //style={{ backgroundColor: getAQIColor(data.Final_AQI) }}
        >

          <h3 className="aqi-value">AQI: {data.Final_AQI}</h3>

          <p className="aqi-category">Category: {data.AQI_Category}</p>

          

          {/* AQI Pollutants */}

          <div className="pollutants">

            <h4>Pollutants</h4>

            <ul>

              <li>PM2.5: {data['PM2.5_AQI']}</li>

              <li>PM10: {data['PM10_AQI']}</li>

              <li>NO2: {data['NO2_AQI']}</li>

              <li>O3: {data['O3_AQI']}</li>

              <li>CO: {data['CO_AQI']}</li>

              <li>SO2: {data['SO2_AQI']}</li>

            </ul>

          </div>

          

          {/* AQI Chart */}

          <div className="chart-container">

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={[

                { name: 'PM2.5', value: data['PM2.5_AQI'] },

                { name: 'PM10', value: data['PM10_AQI'] },

                { name: 'NO2', value: data['NO2_AQI'] },

                { name: 'O3', value: data['O3_AQI'] },

                { name: 'CO', value: data['CO_AQI'] },

                { name: 'SO2', value: data['SO2_AQI'] }

              ]}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Line type="monotone" dataKey="value" stroke="#8884d8" />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      )}

    </div>

  );

};



export default CurrentAQI;


