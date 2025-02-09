// import React, { useState, useEffect } from 'react';
// import LocationPicker from './LocationPicker';
// import AQIDisplay from './AQIDisplay';
// import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
// import { FaChartLine } from 'react-icons/fa';

// import '../styles/main.css'; // Import the CSS for custom styling

// const ForecastAQI = () => {
//     const [data, setData] = useState(null);
//     const [location, setLocation] = useState(null);

//     useEffect(() => {
//         if (location) {
//             fetch(`http://localhost:5000/api/forecast?lat=${location.lat}&lon=${location.lon}`)
//                 .then(res => res.json())
//                 .then(setData)
//                 .catch(console.error);
//         }
//     }, [location]);

//     return (
//         <div>
//             <h2><FaChartLine style={{ color: '#00c6ff', marginRight: '10px' }} />
//             Forecast AQI</h2>
//             <LocationPicker onLocationSelect={setLocation} />
//             {data && (
//                 <>
//                     <div className="chart-container">
//                         <ResponsiveContainer width="100%" height={400}>
//                             <LineChart data={data}>
//                                 <XAxis dataKey="datetime" />
//                                 <YAxis />
//                                 <Tooltip />
//                                 <Legend />
//                                 <Line type="monotone" dataKey="Final_AQI" stroke="#8884d8" />
//                             </LineChart>
//                         </ResponsiveContainer>
//                     </div>
//                     <div className="forecast-list">
//                         {data.map((entry, index) => (
//                             <AQIDisplay key={index} data={entry} />
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ForecastAQI;






import React, { useState, useEffect } from 'react';
import LocationPicker from './LocationPicker';
import AQIDisplay from './AQIDisplay';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const ForecastAQI = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (location) {
            fetch(`https://project-structure-backend.vercel.app/api/forecast?lat=${location.lat}&lon=${location.lon}`)
                .then(res => res.json())
                .then(setData)
                .catch(console.error);
        }
    }, [location]);

    return (
        <div>
            <h2>AQI Forecast</h2>
            <LocationPicker onLocationSelect={setLocation} />
            {data && (
                <>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={data}>
                                <XAxis dataKey="datetime" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Final_AQI" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="forecast-list">
                        {data.map((entry, index) => (
                            <AQIDisplay key={index} data={entry} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ForecastAQI;







