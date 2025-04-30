import { Link } from 'react-router-dom';
import placeholderImg from '../assets/placeholder.png';

const ProductCard = ({ product, onDelete }) => {
  // Format price as VND currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image || placeholderImg} 
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderImg;
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-red-600 font-bold my-2">{formatPrice(product.price)}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Chi tiết
          </Link>
          <div className="flex space-x-2">
            <Link 
              to={`/edit/${product.id}`}
              className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Sửa
            </Link>
            <button 
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => onDelete(product.id)}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;