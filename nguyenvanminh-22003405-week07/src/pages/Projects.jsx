import Sidebar from '../components/dashboard/Sidebar'

export default function Projects() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Projects</h1>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              + New Project
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-block w-3 h-3 rounded-full bg-${item % 3 === 0 ? 'green' : item % 2 === 0 ? 'yellow' : 'pink'}-500`}></span>
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </div>
                <h3 className="font-medium text-lg mb-2">Project {item}</h3>
                <p className="text-gray-500 text-sm mb-4">Last updated 2 days ago</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((avatar) => (
                      <div key={avatar} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                        {avatar}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{60 + item}% complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}