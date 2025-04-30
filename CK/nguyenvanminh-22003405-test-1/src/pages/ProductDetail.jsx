import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, deleteProduct, clearCurrentProduct } from '../features/products/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProduct: product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch the product when the component mounts or id changes
    dispatch(fetchProductById(id));

    // Clean up when the component unmounts
    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [dispatch, id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id)).then(() => {
        navigate('/');
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
          <Link 
            to="/" 
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
          <p className="text-center text-gray-600">Product not found</p>
          <Link 
            to="/" 
            className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                {product.image ? (
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-contain rounded"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-2xl font-bold text-green-600 mt-2">${product.price.toFixed(2)}</p>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link 
                    to="/"
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
                  >
                    Back to Products
                  </Link>
                  <Link 
                    to={`/edit/${product.id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    Edit Product
                  </Link>
                  <button 
                    onClick={handleDelete}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;