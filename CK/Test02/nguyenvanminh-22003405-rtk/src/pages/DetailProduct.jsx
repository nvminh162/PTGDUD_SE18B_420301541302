import { useDispatch, useSelector } from "react-redux";
import placeholder from "../assets/placeholder.png";
import { Link, useParams } from "react-router-dom";
import { ClockLoader, MoonLoader } from "react-spinners";
import { deleteProduct, fetchProductById } from "../features/productSlice";
import { useEffect } from "react";

import { formatVND } from "../util/formatVND.js";
import { toast } from "react-toastify";

const DetailProduct = () => {
  const product = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleDeleteProductCard = (id) => {
    if (confirm("Bạn có chắc xoá sản phẩm này?")) {
      dispatch(deleteProduct(id));
      toast.success("Xoá thành công sản phẩm ra khỏi kho hàng");
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-20">
        <MoonLoader />
        <div className="font-bold ml-3">Loading ...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center mt-20">
        <ClockLoader />
        <div className="font-bold ml-3">Lỗi API: {error}</div>
      </div>
    );

  return (
    <>
      <div className="bg-green-500 flex justify-between items-center font-bold p-5 rounded-b-2xl">
        <Link to={"/product-list"} className="hover:underline">
          &larr; Quay lại
        </Link>
        <div>Chi tiết sản phẩm</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <img
          className="w-full h-80 object-cover object-top border-2 border-gray-200"
          src={product?.image || placeholder}
          alt={product?.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
        />
        <div className="py-5 px-10 space-y-10">
          <h1 className="text-2xl font-bold">
            {product?.name || "Không xác định"}
          </h1>
          <p>{product?.description || "Không xác định"}</p>
          <p className="font-bold text-2xl text-end">
            <i>{formatVND(product?.price) || "Không xác định"}đ</i>
          </p>
          <div className="flex justify-end font-bold">
            <div className="space-x-5">
              <Link
                to={`/edit-product/${product?.id}`}
                className="text-orange-500"
              >
                Sửa
              </Link>
              <button
                onClick={() => handleDeleteProductCard(product.id)}
                className="text-red-500"
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
