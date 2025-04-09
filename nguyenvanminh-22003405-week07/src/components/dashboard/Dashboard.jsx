import Sidebar from './Sidebar'
import { Bell, CreditCard, DollarSign, Users } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                <span className="p-2 bg-green-100 rounded-full">
                  <DollarSign size={16} className="text-green-600" />
                </span>
              </div>
              <p className="text-2xl font-semibold">$45,231.89</p>
              <p className="text-sm text-gray-500 mt-1">+20.1% from last month</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-500 text-sm">Subscriptions</h3>
                <span className="p-2 bg-blue-100 rounded-full">
                  <Users size={16} className="text-blue-600" />
                </span>
              </div>
              <p className="text-2xl font-semibold">+2,350</p>
              <p className="text-sm text-gray-500 mt-1">+180.1% from last month</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-500 text-sm">Sales</h3>
                <span className="p-2 bg-pink-100 rounded-full">
                  <CreditCard size={16} className="text-pink-600" />
                </span>
              </div>
              <p className="text-2xl font-semibold">+12,234</p>
              <p className="text-sm text-gray-500 mt-1">+19% from last month</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-500 text-sm">Active Users</h3>
                <span className="p-2 bg-purple-100 rounded-full">
                  <Users size={16} className="text-purple-600" />
                </span>
              </div>
              <p className="text-2xl font-semibold">+573</p>
              <p className="text-sm text-gray-500 mt-1">+201 since last hour</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="text-lg font-medium mb-4">Overview</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ec4899" 
                    strokeWidth={2} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        {item}
                      </div>
                      <div>
                        <p className="font-medium">Customer {item}</p>
                        <p className="text-sm text-gray-500">5 min ago</p>
                      </div>
                    </div>
                    <span className="font-medium">${Math.floor(Math.random() * 100) + 10}.00</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Popular Products</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center mr-4">
                        Item {item}
                      </div>
                      <div>
                        <p className="font-medium">Product {item}</p>
                        <p className="text-sm text-gray-500">{Math.floor(Math.random() * 100) + 10} sales</p>
                      </div>
                    </div>
                    <span className="font-medium">${Math.floor(Math.random() * 100) + 10}.00</span>
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