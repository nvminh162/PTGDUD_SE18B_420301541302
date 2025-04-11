import { useState, useEffect } from 'react';
import editIcon from '../assets/Download.png'; // Make sure you have this icon in your assets folder

const Datatable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(0);

  // Load data from API
  useEffect(() => {
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

  if (loading) {
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

  if (error) {
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
            <button className="p-1 hover:bg-gray-100 rounded">
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
  );
};

export default Datatable;