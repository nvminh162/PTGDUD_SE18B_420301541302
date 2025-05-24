import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
import { formatVND } from "../util/formatVND";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../features/productSlice";
import { toast } from "react-toastify";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleDeleteProductCard = (id) => {
    if (confirm("Bạn có chắc xoá sản phẩm này?")) {
      dispatch(deleteProduct(id));
      toast.success("Xoá thành công sản phẩm ra khỏi kho hàng");
    }
  };

  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
    toast.success("Thêm vào giỏ hàng thành công!")
  }

  return (
    <div className="rounded-b-2xl border-2 border-gray-300">
      <img
        className="w-full h-52 object-cover object-center"
        src={data?.image || placeholder}
        alt={data.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
      <div className="m-5 space-y-5">
        <h1 className="font-bold">{data.name}</h1>
        <p className="line-clamp-2">{data.description}</p>
        <p className="flex justify-between">
          <i className="font-bold">{formatVND(data.price)}đ</i>
          <button onClick={() => handleAddToCart(data)} className="text-green-500 font-bold">Thêm vào giỏ</button>
        </p>
        <div className="flex justify-between font-bold">
          <Link to={`/detail-product/${data.id}`} className="text-blue-500">Xem chi tiết</Link>
          <div className="space-x-5">
            <Link to={`/edit-product/${data.id}`} className="text-orange-500">Sửa</Link>
            <button
              onClick={() => handleDeleteProductCard(data.id)}
              className="text-red-500"
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
