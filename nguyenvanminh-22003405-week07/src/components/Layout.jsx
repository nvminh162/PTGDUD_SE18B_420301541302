import { useState, useEffect } from 'react';

// Import your icons and images
import logoImg from '../assets/Image 1858.png';
import searchIcon from '../assets/search.png';
import bellIcon from '../assets/Bell 1.png';
import helpIcon from '../assets/Question 1.png';
import avatarImg from '../assets/Avatar.png';
import dashboardIcon from '../assets/Squares four 1.png';
import projectsIcon from '../assets/Folder.png';
import teamsIcon from '../assets/Groups.png';
import analyticsIcon from '../assets/create.png';
import messagesIcon from '../assets/Chat.png';
import integrationsIcon from '../assets/Code.png';
import promoImg from '../assets/Group.png';

function Layout() {
  const [activeNav, setActiveNav] = useState('dashboard');
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - left column */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="h-8" />
            <span className="font-bold text-xl text-gray-800">Logo</span>
          </div>
        </div>
        
        {/* Navigation menu */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'dashboard' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('dashboard')}
            >
              <img src={dashboardIcon} alt="" className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'projects' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('projects')}
            >
              <img src={projectsIcon} alt="" className="w-5 h-5" />
              <span>Projects</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'teams' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('teams')}
            >
              <img src={teamsIcon} alt="" className="w-5 h-5" />
              <span>Teams</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'analytics' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('analytics')}
            >
              <img src={analyticsIcon} alt="" className="w-5 h-5" />
              <span>Analytics</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'messages' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('messages')}
            >
              <img src={messagesIcon} alt="" className="w-5 h-5" />
              <span>Messages</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 p-3 rounded-lg ${
                activeNav === 'integrations' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveNav('integrations')}
            >
              <img src={integrationsIcon} alt="" className="w-5 h-5" />
              <span>Integrations</span>
            </button>
          </nav>
        </div>
        
        {/* Bottom promo area */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-3">
              <img src={promoImg} alt="Promo" className="h-28" />
            </div>
            <h4 className="font-medium text-gray-800">v2.0 is available</h4>
            <button className="mt-2 bg-white border border-gray-200 rounded-lg py-2 px-4 text-sm w-full hover:bg-gray-50">
              Try now
            </button>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2">
            Made with Visily
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="text-xl font-semibold text-gray-800">Dashboard</div>
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-64 h-10 pl-10 pr-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white"
              />
              <img 
                src={searchIcon} 
                alt="Search" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>
            
            {/* Notification icon */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
              <img src={bellIcon} alt="Notifications" className="w-6 h-6" />
            </button>
            
            {/* Help icon */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
              <img src={helpIcon} alt="Help" className="w-6 h-6" />
            </button>
            
            {/* User profile */}
            <button className="flex items-center">
              <img src={avatarImg} alt="Profile" className="w-10 h-10 rounded-full" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-6">
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

          {/* Detailed report section - kept as placeholder */}
          <div>
            {/* Header section with same styling as before */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={analyticsIcon} alt="" className="w-5 h-5 mr-2" />
                <h2 className="text-lg font-semibold">Detailed report</h2>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                  <span>Import</span>
                </button>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                  <span>Export</span>
                </button>
              </div>
            </div>
            
            {/* Table placeholder (same as before) */}
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Table header and content will be implemented in the next section */}
              <div className="p-4 text-gray-500 text-center">Table content will be implemented in the next step</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;