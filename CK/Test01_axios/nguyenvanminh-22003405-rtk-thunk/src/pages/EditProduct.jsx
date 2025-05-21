import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import placeholder from '../assets/placeholder.png';
import { toast } from 'react-toastify';
import { updateProduct } from '../features/products/productSlice';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import { RotateLoader } from 'react-spinners';

const EditProduct = () => {
    const URL = import.meta.env.VITE_URL;
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`${URL}/${id}`);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: 0,
        image: null,
    });

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

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setFormData({ ...formData, image: reader.result });
                reader.readAsDataURL(file);
            }
        } else if (type === 'number') {
            setFormData({ ...formData, [name]: Number(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.description || !formData.price) {
            toast.info('Nhập thiếu thông tin!');
            return;
        }
        dispatch(updateProduct(formData));
        toast.success('Đã cập nhật thành công');
        setTimeout(() => navigate('/'), 2000);
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
            <div className="flex justify-between bg-orange-500 text-white p-7 rounded-t-2xl">
                <h1 className="font-bold text-xl">Cập nhật sản phẩm</h1>
                <Link to="/">Quay lại</Link>
            </div>
            <div className="space-y-5 m-10">
                <div>
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input
                        id="name"
                        className="w-full border-2 border-gray-300 rounded-xl p-2 mt-2"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập tên sản phẩm"
                    />
                </div>
                <div>
                    <label htmlFor="price">Giá (VNĐ)</label>
                    <input
                        id="price"
                        className="w-full border-2 border-gray-300 rounded-xl p-2 mt-2"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0"
                    />
                </div>
                <div>
                    <label htmlFor="description">Mô tả</label>
                    <textarea
                        id="description"
                        className="w-full border-2 border-gray-300 rounded-xl p-2 mt-2"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Mô tả"
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="image">Hình ảnh (tuỳ chọn)</label>
                        <input
                            id="image"
                            className="ml-5 border-2 border-gray-300 rounded-xl p-2 mt-2"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            placeholder="0"
                        />
                    </div>
                    <img
                        className="w-[300px] h-[300px] object-cover object-center"
                        src={formData.image || placeholder}
                        alt="preview"
                    />
                </div>
                <div className="flex justify-end gap-5">
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-orange-500 text-white rounded-2xl px-4 py-2"
                    >
                        {isLoading ? 'Đang cập nhật ...' : 'Cập nhật'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default EditProduct;
