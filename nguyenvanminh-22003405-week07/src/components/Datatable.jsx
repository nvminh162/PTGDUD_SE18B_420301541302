import { useState, useEffect } from 'react';
import editIcon from '../assets/Download.png';

const Datatable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(0);
  
  // Edit modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: ''
  });

  // Load data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://67f940a7094de2fe6ea0f7b2.mockapi.io/book');
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      setCustomers(data);
      setResultsCount(data.length);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load customer data');
      console.error('Error loading customer data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(customers.map(customer => customer.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual row selection
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
      setSelectAll(false);
    } else {
      setSelectedRows([...selectedRows, id]);
      if (selectedRows.length + 1 === customers.length) {
        setSelectAll(true);
      }
    }
  };

  // Get status style based on status value
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'new':
        return 'bg-blue-50 text-blue-600';
      case 'in-progress':
        return 'bg-yellow-50 text-yellow-600';
      case 'completed':
        return 'bg-green-50 text-green-600';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Open edit modal with customer data
  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name || '',
      company: customer.company || '',
      orderValue: customer.orderValue || '',
      orderDate: customer.orderDate || '',
      status: customer.status || ''
    });
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Save changes with PUT request
  const handleSave = async () => {
    if (!editingCustomer) return;
    
    try {
      setLoading(true);
      
      const response = await fetch(`https://67f940a7094de2fe6ea0f7b2.mockapi.io/book/${editingCustomer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editingCustomer,
          name: formData.name,
          company: formData.company,
          orderValue: formData.orderValue,
          orderDate: formData.orderDate,
          status: formData.status
        }),
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      // Close modal and refresh data
      setIsModalOpen(false);
      setEditingCustomer(null);
      await fetchData();
      
    } catch (err) {
      setError(err.message || 'Failed to update customer data');
      console.error('Error updating customer data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  if (loading && !isModalOpen) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-50 border-b border-gray-200">
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-6 col-span-2 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
        
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grid grid-cols-8 gap-4 p-4 border-b border-gray-200 animate-pulse">
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
            <div className="h-10 col-span-2 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-6 w-6 bg-gray-200 rounded ml-auto"></div>
          </div>
        ))}
        
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-gray-200">
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && !isModalOpen) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="bg-red-50 p-4 rounded-lg text-red-700">
          <p>{error}</p>
          <button 
            className="mt-2 bg-red-100 px-4 py-2 rounded hover:bg-red-200"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Edit Modal */}
      {isModalOpen && editingCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Edit Customer</h3>
              <button 
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Value</label>
                <input
                  type="text"
                  name="orderValue"
                  value={formData.orderValue}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
                <input
                  type="text"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-2">CUSTOMER NAME</div>
          <div>COMPANY</div>
          <div>ORDER VALUE</div>
          <div>ORDER DATE</div>
          <div>STATUS</div>
          <div className="text-right">ACTION</div>
        </div>

        {/* Table body */}
        {customers.map((customer) => (
          <div 
            key={customer.id} 
            className="grid grid-cols-8 gap-4 px-4 py-3 border-b border-gray-200 items-center hover:bg-gray-50"
          >
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={selectedRows.includes(customer.id)}
                onChange={() => handleSelectRow(customer.id)}
                className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
              />
            </div>
            <div className="col-span-2 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={customer.avatar} 
                  alt={customer.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/40';
                  }}
                />
              </div>
              <span className="font-medium text-gray-800">{customer.name}</span>
            </div>
            <div className="text-gray-600">{customer.company}</div>
            <div className="font-medium text-gray-800">{customer.orderValue}</div>
            <div className="text-gray-600">{customer.orderDate}</div>
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(customer.status)}`}>
                {customer.status}
              </span>
            </div>
            <div className="text-right">
              <button 
                className="p-1 hover:bg-gray-100 rounded"
                onClick={() => handleEdit(customer)}
              >
                <img src={editIcon} alt="Edit" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {resultsCount} results
          </div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map(page => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm
                  ${currentPage === page 
                    ? 'bg-pink-500 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'}`
                }
              >
                {page}
              </button>
            ))}
            <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
            {[10, 11].map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-sm text-gray-700"
              >
                {page}
              </button>
            ))}
            <button 
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-sm text-gray-700"
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;