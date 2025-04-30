import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productSlice';
import { toast } from 'react-toastify';
import useFetch from '../hooks/useFetch';
import placeholderImg from '../assets/placeholder.png';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Sử dụng custom hook useFetch để lấy chi tiết sản phẩm
  const { data: product, loading, error } = useFetch(`http://localhost:3000/products/${id}`);

  // Format price as VND currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      try {
        await dispatch(deleteProduct(id)).unwrap();
        toast.success('Xóa sản phẩm thành công!');
        navigate('/');
      } catch (err) {
        toast.error(`Lỗi: ${err.message}`);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
        <Link 
          to="/" 
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Quay lại
        </Link>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={product.image || placeholderImg} 
              alt={product.name}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImg;
              }}
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-red-600 font-bold text-xl mb-4">{formatPrice(product.price || 0)}</p>
            <div className="bg-gray-100 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Mô tả:</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="flex space-x-3">
              <Link 
                to="/" 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Quay lại
              </Link>
              <Link 
                to={`/edit/${product.id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
              >
                Chỉnh sửa
              </Link>
              <button 
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Xóa sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;