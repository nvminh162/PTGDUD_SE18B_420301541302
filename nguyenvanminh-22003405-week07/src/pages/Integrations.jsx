import Sidebar from '../components/dashboard/Sidebar'
import { ExternalLink, Check, X } from 'lucide-react'

export default function Integrations() {
  const integrations = [
    {
      id: 1,
      name: 'Google Analytics',
      description: 'Track website traffic and user behavior',
      category: 'Analytics',
      connected: true,
      icon: '📊'
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Send notifications to your team channels',
      category: 'Communication',
      connected: true,
      icon: '💬'
    },
    {
      id: 3,
      name: 'GitHub',
      description: 'Connect repositories and track code changes',
      category: 'Development',
      connected: false,
      icon: '📂'
    },
    {
      id: 4,
      name: 'Stripe',
      description: 'Process payments and manage subscriptions',
      category: 'Payments',
      connected: false,
      icon: '💳'
    },
    {
      id: 5,
      name: 'Zapier',
      description: 'Automate workflows with thousands of apps',
      category: 'Automation',
      connected: true,
      icon: '⚡'
    },
    {
      id: 6,
      name: 'HubSpot',
      description: 'CRM and marketing automation platform',
      category: 'Marketing',
      connected: false,
      icon: '📣'
    },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-2">Integrations</h1>
          <p className="text-gray-500 mb-8">Connect your favorite tools to enhance your workflow</p>
          
          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">All</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">Analytics</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">Development</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">Marketing</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">More</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map(integration => (
              <div key={integration.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 mr-4 text-2xl">
                      {integration.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{integration.name}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{integration.category}</span>
                    </div>
                  </div>
                  {integration.connected ? (
                    <span className="flex items-center text-sm text-green-600">
                      <Check size={16} className="mr-1" /> Connected
                    </span>
                  ) : (
                    <span className="flex items-center text-sm text-gray-400">
                      <X size={16} className="mr-1" /> Not connected
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">{integration.description}</p>
                <div className="flex justify-between items-center">
                  <button 
                    className={`px-3 py-1 text-sm rounded-md ${
                      integration.connected 
                        ? 'border border-gray-300 text-gray-700 hover:bg-gray-50' 
                        : 'bg-pink-500 text-white hover:bg-pink-600'
                    }`}
                  >
                    {integration.connected ? 'Manage' : 'Connect'}
                  </button>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}