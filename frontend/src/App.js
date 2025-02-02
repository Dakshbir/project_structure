// import React, { useState } from 'react';
// import CurrentAQI from './components/CurrentAQI';
// import ForecastAQI from './components/ForecastAQI';
// import HistoricalAQI from './components/HistoricalAQI';
// import './styles/main.css';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('current');

//   return (
//     <div className="app">
//       <h1>Delhi AQI Monitor</h1>
//       <div className="tabs">
//         <button 
//           onClick={() => setActiveTab('current')}
//           className={activeTab === 'current' ? 'active' : ''}
//         >
//           Current AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('forecast')}
//           className={activeTab === 'forecast' ? 'active' : ''}
//         >
//           Forecast AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('historical')}
//           className={activeTab === 'historical' ? 'active' : ''}
//         >
//           Historical AQI
//         </button>
//       </div>
      
//       <div className="content">
//         {activeTab === 'current' && <CurrentAQI />}
//         {activeTab === 'forecast' && <ForecastAQI />}
//         {activeTab === 'historical' && <HistoricalAQI />}
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState } from 'react';
// import CurrentAQI from './components/CurrentAQI';
// import ForecastAQI from './components/ForecastAQI';
// import HistoricalAQI from './components/HistoricalAQI';
// import './styles/main.css';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('current');

//   return (
//     <div className="app">
//       <h1>Delhi AQI Monitor</h1>
//       <div className="tabs">
//         <button 
//           onClick={() => setActiveTab('current')}
//           className={activeTab === 'current' ? 'active' : ''}
//         >
//           Current AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('forecast')}
//           className={activeTab === 'forecast' ? 'active' : ''}
//         >
//           Forecast AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('historical')}
//           className={activeTab === 'historical' ? 'active' : ''}
//         >
//           Historical AQI
//         </button>
//       </div>
      
//       <div className="content">
//         {activeTab === 'current' && <CurrentAQI />}
//         {activeTab === 'forecast' && <ForecastAQI />}
//         {activeTab === 'historical' && <HistoricalAQI />}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import CurrentAQI from './components/CurrentAQI';
// import ForecastAQI from './components/ForecastAQI';
// import HistoricalAQI from './components/HistoricalAQI';
// import './styles/main.css';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('current');

//   return (
//     <div className="app">
//       <h1 style={{ color: 'aqua' }}>Delhi AQI Monitor</h1>
//       <div className="tabs">
//         <button 
//           onClick={() => setActiveTab('current')}
//           className={activeTab === 'current' ? 'active' : ''}
//         >
//           Current AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('forecast')}
//           className={activeTab === 'forecast' ? 'active' : ''}
//         >
//           Forecast AQI
//         </button>
//         <button 
//           onClick={() => setActiveTab('historical')}
//           className={activeTab === 'historical' ? 'active' : ''}
//         >
//           Historical AQI
//         </button>
//       </div>
      
//       <div className="content">
//         {activeTab === 'current' && <CurrentAQI />}
//         {activeTab === 'forecast' && <ForecastAQI />}
//         {activeTab === 'historical' && <HistoricalAQI />}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import CurrentAQI from './components/CurrentAQI';
import ForecastAQI from './components/ForecastAQI';
import HistoricalAQI from './components/HistoricalAQI';
import './styles/main.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="app">
      <h1>Delhi AQI Monitor</h1>
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('current')}
          className={activeTab === 'current' ? 'active' : ''}
        >
          Current AQI
        </button>
        <button 
          onClick={() => setActiveTab('forecast')}
          className={activeTab === 'forecast' ? 'active' : ''}
        >
          Forecast AQI
        </button>
        <button 
          onClick={() => setActiveTab('historical')}
          className={activeTab === 'historical' ? 'active' : ''}
        >
          Historical AQI
        </button>
      </div>
      
      <div className="content">
        {activeTab === 'current' && <CurrentAQI />}
        {activeTab === 'forecast' && <ForecastAQI />}
        {activeTab === 'historical' && <HistoricalAQI />}
      </div>
    </div>
  );
};

export default App;
