import { BarChart2, Layers, MessageSquare, PieChart, Users, Zap } from "lucide-react"
import groupImg from '../../assets/Group.png';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-[220px] bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-5 border-b border-gray-100">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-r from-pink-500 to-violet-500">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-xl">Logo</span>
        </NavLink>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <BarChart2 size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Layers size={18} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Users size={18} />
              <span>Teams</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <PieChart size={18} />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <MessageSquare size={18} />
              <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Zap size={18} />
              <span>Integrations</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto p-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-center mb-3">
            <img
              src={groupImg}
              alt="Upgrade illustration"
              width={150}
              height={120}
              className="object-contain"
            />
          </div>
          <h3 className="text-center font-semibold mb-2">v2.0 is available</h3>
          <button className="w-full py-2 border border-blue-300 rounded-md text-blue-600 text-sm hover:bg-blue-100 transition-colors">
            Try now
          </button>
        </div>
        <div className="mt-4 text-xs text-center text-gray-400">Made with ❤️ by Visily</div>
      </div>
    </div>
  )
}