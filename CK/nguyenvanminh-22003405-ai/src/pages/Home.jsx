import React from 'react';
import ProductList from '../features/products/ProductList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Management</h1>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;