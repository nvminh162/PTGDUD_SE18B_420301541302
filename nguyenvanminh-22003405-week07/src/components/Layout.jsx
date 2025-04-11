function Layout() {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar - left column */}
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="h-16 bg-pink-200 flex items-center px-4">
            {/* Logo placeholder */}
            <div className="font-bold text-xl">Logo</div>
          </div>
          
          {/* Navigation menu */}
          <div className="p-4">
            <div className="mb-4 p-2 bg-pink-500 text-white rounded">Dashboard</div>
            <div className="mb-2 p-2 bg-gray-200 rounded">Projects</div>
            <div className="mb-2 p-2 bg-gray-200 rounded">Teams</div>
            <div className="mb-2 p-2 bg-gray-200 rounded">Analytics</div>
            <div className="mb-2 p-2 bg-gray-200 rounded">Messages</div>
            <div className="mb-2 p-2 bg-gray-200 rounded">Integrations</div>
          </div>
          
          {/* Bottom promo area */}
          <div className="mt-auto p-4 bg-blue-100 mx-4 rounded">
            <div className="h-40 bg-blue-200 rounded flex items-center justify-center">
              Promo
            </div>
          </div>
        </div>
  
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
            <div className="text-xl font-semibold text-pink-500">Dashboard</div>
            <div className="flex items-center space-x-4">
              <div className="w-64 h-8 bg-gray-100 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
  
          {/* Main content */}
          <div className="flex-1 overflow-auto p-4">
            {/* Overview section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-pink-100 p-4 rounded-lg h-32"></div>
                <div className="bg-blue-100 p-4 rounded-lg h-32"></div>
                <div className="bg-green-100 p-4 rounded-lg h-32"></div>
              </div>
            </div>
  
            {/* Detailed report section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Detailed report</h2>
                <div className="flex space-x-2">
                  <div className="bg-pink-200 px-4 py-1 rounded">Import</div>
                  <div className="bg-gray-200 px-4 py-1 rounded">Export</div>
                </div>
              </div>
              
              {/* Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="grid grid-cols-6 bg-gray-50 p-4 border-b border-gray-200">
                  <div className="col-span-1"></div>
                  <div className="col-span-1">Customer</div>
                  <div className="col-span-1">Company</div>
                  <div className="col-span-1">Order Value</div>
                  <div className="col-span-1">Date</div>
                  <div className="col-span-1">Status</div>
                </div>
                
                {/* Table rows as placeholder */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="grid grid-cols-6 p-4 border-b border-gray-200">
                    <div className="col-span-1"></div>
                    <div className="col-span-1 bg-gray-100 h-8 rounded"></div>
                    <div className="col-span-1 bg-gray-100 h-8 rounded"></div>
                    <div className="col-span-1 bg-gray-100 h-8 rounded"></div>
                    <div className="col-span-1 bg-gray-100 h-8 rounded"></div>
                    <div className="col-span-1 bg-gray-100 h-8 rounded"></div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-end mt-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <div 
                      key={page} 
                      className={`w-8 h-8 flex items-center justify-center rounded ${page === 1 ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                    >
                      {page}
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
  
  export default Layout