import Sidebar from '../components/dashboard/Sidebar'
import { Users, Plus, Search } from 'lucide-react'

export default function Teams() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Teams</h1>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 flex items-center gap-2">
              <Plus size={18} /> Add Team Member
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search team members..." 
                  className="w-full border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                />
              </div>
            </div>
            
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <Users size={18} className="text-gray-500" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Team Member {item}</div>
                          <div className="text-sm text-gray-500">member{item}@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{item % 3 === 0 ? 'Developer' : item % 2 === 0 ? 'Designer' : 'Manager'}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${item % 3 === 0 ? 'green' : 'blue'}-100 text-${item % 3 === 0 ? 'green' : 'blue'}-800`}>
                        {item % 3 === 0 ? 'Active' : 'Away'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item + 2}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-pink-600 hover:text-pink-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}