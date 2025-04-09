import Sidebar from '../components/dashboard/Sidebar'
import { TrendingUp, TrendingDown, Users, BarChart2, Activity, ArrowRight } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-8">Analytics Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <h3 className="text-2xl font-bold mt-1">2,543</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-md">
                  <Users size={20} className="text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 font-medium">12%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Sessions</p>
                  <h3 className="text-2xl font-bold mt-1">8,751</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-md">
                  <Activity size={20} className="text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 font-medium">7%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Bounce Rate</p>
                  <h3 className="text-2xl font-bold mt-1">42%</h3>
                </div>
                <div className="p-2 bg-pink-100 rounded-md">
                  <BarChart2 size={20} className="text-pink-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingDown size={16} className="text-red-500 mr-1" />
                <span className="text-red-500 font-medium">3%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Avg. Session</p>
                  <h3 className="text-2xl font-bold mt-1">2m 36s</h3>
                </div>
                <div className="p-2 bg-purple-100 rounded-md">
                  <Activity size={20} className="text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 font-medium">9%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Charts */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">User Activity</h3>
                <select className="text-sm border rounded px-2 py-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-64 flex items-end space-x-2">
                {[35, 45, 30, 65, 85, 55, 40].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      style={{height: `${height}%`}} 
                      className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t"
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Traffic Sources</h3>
                <button className="text-sm text-pink-600 flex items-center">
                  View Details <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { source: 'Direct', value: 35, color: 'bg-blue-500' },
                  { source: 'Social Media', value: 28, color: 'bg-pink-500' },
                  { source: 'Referral', value: 22, color: 'bg-purple-500' },
                  { source: 'Organic Search', value: 15, color: 'bg-yellow-500' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.source}</span>
                      <span className="text-sm text-gray-500">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{width: `${item.value}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}