// import { FaHistory } from 'react-icons/fa';
// import React, { useState } from 'react';
// import LocationPicker from './LocationPicker';
// import AQIDisplay from './AQIDisplay';
// import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

// // const HistoricalAQI = () => {
// //     const [data, setData] = useState(null);
// //     const [location, setLocation] = useState(null);
// //     const [date, setDate] = useState('');

// //     const fetchData = () => {
// //         if (location && date) {
// //             const start = Math.floor(new Date(date).getTime() / 1000);
// //             const end = start + (24 * 60 * 60);
            
// //             fetch(`http://localhost:5000/api/historical?lat=${location.lat}&lon=${location.lon}&start=${start}&end=${end}`)
// //                 .then(res => res.json())
// //                 .then(setData)
// //                 .catch(console.error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2><FaHistory style={{ color: '#ff6b6b', marginRight: '10px' }} />
// //             Historical AQI</h2>
// //             <div className="controls">
// //                 <LocationPicker onLocationSelect={setLocation} />
// //                 <input
// //                     type="date"
// //                     value={date}
// //                     onChange={(e) => setDate(e.target.value)}
// //                     className="date-picker"

// //                 />
// //                 <button onClick={fetchData}>Get Data</button>
// //             </div>
// //              {data && (
// //                 <>
// //                     <div className="chart-container">
// //                         <ResponsiveContainer width="100%" height={400}>
// //                             <LineChart data={data}>
// //                                 <XAxis dataKey="datetime" />
// //                                 <YAxis />
// //                                 <Tooltip />
// //                                 <Legend />
// //                                 <Line type="monotone" dataKey="Final_AQI" stroke="#8884d8" />
// //                             </LineChart>
// //                         </ResponsiveContainer>
// //                     </div>
// //                     <div className="historical-list">
// //                         {data.map((entry, index) => (
// //                             <AQIDisplay key={index} data={entry} />
// //                         ))}
// //                     </div>
// //                 </>
// //             )}
// //         </div>

        
// //     );
// // };

// // export default HistoricalAQI;


// const HistoricalAQI = () => {
//     const [data, setData] = useState(null);
//     const [location, setLocation] = useState(null);
//     const [date, setDate] = useState('');

//     const fetchData = () => {
//         if (location && date) {
//             const start = Math.floor(new Date(date).getTime() / 1000);
//             const end = start + (24 * 60 * 60);
            
//             fetch(`http://localhost:5000/api/historical?lat=${location.lat}&lon=${location.lon}&start=${start}&end=${end}`)
//                 .then(res => res.json())
//                 .then(setData)
//                 .catch(console.error);
//         }
//     };

//     const getAQIColor = (aqi) => {
//         if (aqi <= 50) return 'good';
//         if (aqi <= 100) return 'moderate';
//         if (aqi <= 150) return 'sensitive';
//         if (aqi <= 200) return 'unhealthy';
//         if (aqi <= 300) return 'very-unhealthy';
//         return 'hazardous';
//     };

//     return (
//         <div>
//             <h2><FaHistory style={{ color: '#ff6b6b', marginRight: '10px' }} />
//                          Historical AQI</h2>
//             <div className="controls">
//                 <LocationPicker onLocationSelect={setLocation} />
//                 <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className="date-picker"
//                 />
//                 <button onClick={fetchData}>Get Data</button>
//             </div>
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
//                     <div className="historical-list">
//                         {data.map((entry, index) => (
//                             <div 
//                                 key={index} 
//                                 className={`aqi-display  ${getAQIColor(entry.Final_AQI)}`}
//                             >
//                                 <AQIDisplay data={entry} />
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default HistoricalAQI;






import React, { useState } from 'react';
import LocationPicker from './LocationPicker';
import AQIDisplay from './AQIDisplay';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const HistoricalAQI = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState(null);
    const [date, setDate] = useState('');

    const fetchData = () => {
        if (location && date) {
            const start = Math.floor(new Date(date).getTime() / 1000);
            const end = start + (24 * 60 * 60);
            
            fetch(`https://project-structure-backend.vercel.app/api/historical?lat=${location.lat}&lon=${location.lon}&start=${start}&end=${end}`)
                .then(res => res.json())
                .then(setData)
                .catch(console.error);
        }
    };

    return (
        <div>
            <h2>Historical AQI</h2>
            <div className="controls">
                <LocationPicker onLocationSelect={setLocation} />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="date-picker"
                />
                <button onClick={fetchData}>Get Data</button>
            </div>
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
                    <div className="historical-list">
                        {data.map((entry, index) => (
                            <AQIDisplay key={index} data={entry} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default HistoricalAQI;

