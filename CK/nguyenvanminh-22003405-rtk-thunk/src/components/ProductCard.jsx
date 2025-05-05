import { useDispatch } from 'react-redux';
import placeholder from '../assets/placeholder.png';
import { formatPrice } from '../util/formatPrice';
import { deleteProduct } from '../features/products/productSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            dispatch(deleteProduct(id));
            toast.success('Delete success');
        }
    };

    return (
        <div className="flex flex-col justify-center border-2 rounded-xl border-gray-200 p-4 gap-4 shadow-xl hover:shadow-2xl hover:scale-105">
            <img
                className="w-full h-[300px] object-cover object-center"
                src={data.image || placeholder}
                alt={data.name}
            />
            <div className="space-y-3">
                <h1 className="font-bold">{data.name}</h1>
                <p className="line-clamp-2">{data.description}</p>
                <p className="font-bold text-end">{formatPrice(data.price)}đ</p>
                <div className="flex justify-between">
                    <Link to={`product/${data.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
                        Chi tiết
                    </Link>
                    <div className="space-x-2">
                        <Link
                            to={`/edit/${data.id}`}
                            className="bg-orange-500 text-white px-3 py-2 rounded-2xl"
                        >
                            Sửa
                        </Link>
                        <button
                            onClick={() => handleDelete(data.id)}
                            className="bg-red-500 text-white px-3 py-2 rounded-2xl"
                        >
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
