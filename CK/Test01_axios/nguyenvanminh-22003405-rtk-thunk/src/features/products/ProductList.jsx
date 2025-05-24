import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from './productSlice';
import { Link } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const isLoading = useSelector((state) => state.product.isLoading);
    const error = useSelector((state) => state.product.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center flex-col p-10">
                <RotateLoader />
                <div className="mt-5">Loading ...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <p className="font-bold">Lỗi API!</p>
                {error}
            </div>
        );
    }

    if (!products.length) {
        return (
            <div className="text-center py-10 space-y-5">
                <div className="text-xl">Chưa có sản phẩm</div>
                <Link to="/add" className="bg-blue-500 text-white py-2 px-3 rounded-xl gap-2">
                    Thêm sản phẩm
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* heading */}
            <div className="flex items-center justify-between gap-2 my-5">
                <div className="flex items-center">
                    <h1 className="font-bold text-xl">Danh sách sản phẩm</h1>
                </div>
                <Link
                    to="/add"
                    className="bg-blue-500 text-white py-2 px-3 rounded-xl flex items-center gap-2"
                >
                    Thêm sản phẩm
                </Link>
            </div>
            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
