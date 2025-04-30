import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, description, image } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-green-600 font-bold mb-2">${price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex space-x-2">
          <Link
            to={`/product/${id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Details
          </Link>
          <Link
            to={`/edit/${id}`}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;