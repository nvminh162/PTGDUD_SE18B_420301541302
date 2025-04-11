import { useState, useEffect } from 'react';
import Datatable from '../components/Datatable';
import analyticsIcon from '../assets/create.png';
import importIcon from '../assets/Bell 1.png';
import exportIcon from '../assets/create.png';

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://67f940a7094de2fe6ea0f7b2.mockapi.io/overview');
        
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        
        const data = await response.json();
        setOverviewData(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch overview data');
        console.error('Error fetching overview data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);
  
  return (
    <>
      {/* Overview section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <img src={analyticsIcon} alt="" className="w-5 h-5 mr-2 text-pink-500" />
          <h2 className="text-lg font-semibold">Overview</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {loading ? (
            // Loading state
            <>
              <div className="bg-gray-100 animate-pulse p-6 rounded-lg h-32"></div>
              <div className="bg-gray-100 animate-pulse p-6 rounded-lg h-32"></div>
              <div className="bg-gray-100 animate-pulse p-6 rounded-lg h-32"></div>
            </>
          ) : error ? (
            // Error state
            <div className="col-span-3 bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-red-500">Error: {error}</p>
              <button 
                className="mt-2 bg-red-100 px-4 py-2 rounded-lg hover:bg-red-200 text-red-700"
                onClick={() => window.location.reload()}
              >
                Try again
              </button>
            </div>
          ) : (
            // Data loaded successfully
            overviewData.map(card => (
              <div key={card.id} className={`${card.bgColor} p-6 rounded-lg`}>
                <div className="flex justify-between mb-4">
                  <span className="font-medium text-gray-600">{card.title}</span>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className={`${card.iconColor} text-xl`}>{card.icon}</span>
                  </div>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold">{card.value}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500">
                    {card.changeType === 'increase' ? '▲' : '▼'} {card.change}
                  </span>
                  <span className="ml-1 text-gray-500">period of change</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detailed report section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={analyticsIcon} alt="" className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Detailed report</h2>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
              <img src={importIcon} alt="" className="w-5 h-5" />
              <span>Import</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
              <img src={exportIcon} alt="" className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
        
        {/* Datatable component */}
        <Datatable />
      </div>
    </>
  );
};

export default Dashboard;