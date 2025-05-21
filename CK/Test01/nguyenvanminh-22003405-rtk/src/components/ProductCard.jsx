import placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/productSlice";
import { toast } from "react-toastify";
import { formatVND } from '../util/formatVND'

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (confirm("Bạn có chắc chắn xoá sản phẩm này?")) {
      dispatch(deleteProduct(id));
      toast.success("Xoá thành công sản phẩm ra khỏi kho");
    }
  };

  return (
    <div className="border-2 border-gray-200 rounded-xl hover:scale-105">
      <img
        className="h-52 w-full object-cover object-center"
        src={data.image || placeholder}
        alt={data.name}
      />
      <div className="m-5 space-y-5">
        <h1 className="font-bold text-base">{data.name}</h1>
        <p className="line-clamp-2">{data.description}</p>
        <p className="font-bold text-end italic">{formatVND(Number(data.price))}đ</p>
        <div className="flex justify-between font-bold">
          <Link
            to={`/product/${data.id}`}
            className="text-blue-500 hover:underline"
          >
            Xem chi tiết
          </Link>
          <div className="space-x-5">
            <Link
              to={`/edit-product/${data.id}`}
              className="text-orange-500 hover:underline"
            >
              Sửa
            </Link>
            <button
              onClick={() => handleDelete(data.id)}
              className="text-red-500 hover:underline"
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
