import { Outlet, NavLink } from 'react-router-dom';

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
            <NavLink 
              to="/"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={dashboardIcon} alt="" className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
            
            <NavLink 
              to="/projects"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={projectsIcon} alt="" className="w-5 h-5" />
              <span>Projects</span>
            </NavLink>
            
            <NavLink 
              to="/teams"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={teamsIcon} alt="" className="w-5 h-5" />
              <span>Teams</span>
            </NavLink>
            
            <NavLink 
              to="/analytics"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={analyticsIcon} alt="" className="w-5 h-5" />
              <span>Analytics</span>
            </NavLink>
            
            <NavLink 
              to="/messages"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={messagesIcon} alt="" className="w-5 h-5" />
              <span>Messages</span>
            </NavLink>
            
            <NavLink 
              to="/integrations"
              className={({ isActive }) => `w-full flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <img src={integrationsIcon} alt="" className="w-5 h-5" />
              <span>Integrations</span>
            </NavLink>
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

        {/* Main content - Outlet will render the current route's component */}
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;