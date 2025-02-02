// import React from 'react';

// const LocationPicker = ({ onLocationSelect }) => {
//   const delhiLocations = [
//     { name: 'New Delhi', lat: 28.6139, lon: 77.2090 },
//     { name: 'Rohini', lat: 28.7040, lon: 77.1025 },
//     { name: 'Dwarka', lat: 28.5921, lon: 77.0460 },
//     // Add more Delhi locations
//   ];

//   return (
//     <select onChange={(e) => {
//       const [lat, lon] = e.target.value.split(',');
//       onLocationSelect({ lat, lon });
//     }}>
//       <option value="">Select Location</option>
//       {delhiLocations.map(loc => (
//         <option key={loc.name} value={`${loc.lat},${loc.lon}`}>
//           {loc.name}
//         </option>
//       ))}
//     </select>
//   );
// };
// export default LocationPicker;



import React from 'react';

const LocationPicker = ({ onLocationSelect }) => {
  const delhiLocations = [
    { name: 'New Delhi (Connaught Place)', lat: 28.6139, lon: 77.2090 },
    { name: 'Rohini', lat: 28.7040, lon: 77.1025 },
    { name: 'Dwarka', lat: 28.5921, lon: 77.0460 },
    { name: 'Anand Vihar', lat: 28.6469, lon: 77.3164 },
    { name: 'Punjabi Bagh', lat: 28.6683, lon: 77.1167 },
    { name: 'South Delhi (Defence Colony)', lat: 28.5733, lon: 77.2263 },
    { name: 'Mayur Vihar', lat: 28.6067, lon: 77.2908 },
    { name: 'Chandni Chowk', lat: 28.6506, lon: 77.2309 },
    { name: 'Karol Bagh', lat: 28.6449, lon: 77.1906 },
    { name: 'Saket', lat: 28.5243, lon: 77.2167 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <select 
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => {
          const [lat, lon] = e.target.value.split(',');
          onLocationSelect({ lat, lon });
        }}
        defaultValue=""
      >
        <option value="" disabled>Select location</option>
        {delhiLocations.map(loc => (
          <option 
            key={loc.name} 
            value={`${loc.lat},${loc.lon}`}
          >
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationPicker;