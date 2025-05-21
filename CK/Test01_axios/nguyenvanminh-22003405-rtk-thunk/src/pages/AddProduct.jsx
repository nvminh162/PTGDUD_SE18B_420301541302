import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import placeholder from '../assets/placeholder.png';
import { toast } from 'react-toastify';
import { createProduct } from '../features/products/productSlice';

const AddProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.product.isLoading);
    const [formData, setFormData] = useState({
        id: uuidv4(),
        name: '',
        description: '',
        price: 0,
        image: null,
    });
    const [preview, setPreview] = useState(placeholder);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                    setFormData({ ...formData, image: reader.result });
                };
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
        dispatch(createProduct(formData));
        toast.success('Đã thêm thành công');
        setTimeout(() => navigate('/'), 2000);
    };

    const handleCancel = () => {
        setFormData({
            id: uuidv4(),
            name: '',
            description: '',
            price: 0,
            image: null,
        });
    };

    return (
        <>
            <div className="flex justify-between bg-blue-500 text-white p-7 rounded-t-2xl">
                <h1 className="font-bold text-xl">Thêm sản phẩm mới</h1>
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
                    <img className="w-[300px] h-[300px] object-cover object-center" src={preview} alt="preview" />
                </div>
                <div className="flex justify-end gap-5">
                    <button onClick={handleCancel} className="bg-red-500 text-white rounded-2xl px-4 py-2">
                        Huỷ
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-blue-500 text-white rounded-2xl px-4 py-2"
                    >
                        {isLoading ? 'Đang lưu ...' : 'Lưu'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
