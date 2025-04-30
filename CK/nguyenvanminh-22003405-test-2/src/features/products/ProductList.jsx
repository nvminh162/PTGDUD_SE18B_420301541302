import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from './productSlice';
import ProductCard from '../../components/ProductCard';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';

const ProductList = () => {
  const dispatch = useDispatch();
  
  // Sử dụng custom hook useFetch để lấy danh sách sản phẩm
  const { data, loading, error } = useFetch('http://localhost:3000/products');

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      try {
        await dispatch(deleteProduct(id)).unwrap();
        toast.success('Xóa sản phẩm thành công!');
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
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <strong className="font-bold">Lỗi!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Danh sách sản phẩm</h1>
        <Link 
          to="/add" 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Thêm sản phẩm mới
        </Link>
      </div>

      {!data || data.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Không có sản phẩm nào. Hãy thêm sản phẩm mới!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(product => (
            <ProductCard key={product.id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;