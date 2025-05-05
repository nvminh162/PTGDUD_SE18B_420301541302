import { Link, useNavigate, useParams } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { formatPrice } from '../util/formatPrice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProduct } from '../features/products/productSlice';
import { RotateLoader } from 'react-spinners';

const ProductDetail = () => {
    const URL = import.meta.env.VITE_URL;

    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`${URL}/${id}`);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: 0,
        image: null,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            setFormData({
                id: data.id || '',
                name: data.name || '',
                description: data.description || '',
                price: data.price || 0,
                image: data.image || null,
            });
        }
    }, [data]);

    const handleDelete = (id) => {
        if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            dispatch(deleteProduct(id));
            toast.success('Delete success');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

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

    return (
        <>
            <div className="flex justify-between bg-blue-500 text-white p-7 rounded-t-2xl">
                <h1 className="font-bold text-xl">Thông tin sản phẩm</h1>
                <Link to="/">Quay lại</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img
                        className="w-full h-[400px] object-cover object-center"
                        src={formData.image || placeholder}
                        alt={formData.name}
                    />
                </div>
                <div className="p-10 space-y-5">
                    <h1 className="font-bold">{formData.name}</h1>
                    <p className="font-bold">{formatPrice(formData.price)}đ</p>
                    <p className="line-clamp-5">{formData.description}</p>
                    <div className="space-x-2">
                        <Link to={`/edit/${id}`} className="bg-orange-500 text-white px-3 py-2 rounded-2xl">
                            Sửa
                        </Link>
                        <button
                            onClick={() => handleDelete(id)}
                            className="bg-red-500 text-white px-3 py-2 rounded-2xl"
                        >
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
