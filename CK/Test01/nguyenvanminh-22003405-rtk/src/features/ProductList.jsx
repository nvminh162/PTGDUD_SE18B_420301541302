import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./productSlice";
import { ClockLoader, MoonLoader, GridLoader } from "react-spinners";

const ProductList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);
  const list = useSelector((state) => state.product.list);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

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

  if (list.length === 0)
    return (
      <div className="flex justify-center items-center mt-20 space-x-2">
        <GridLoader />
        <div className="font-bold ml-3">Chưa có sản phẩm trong kho</div>
        <br />
        <Link className="hover:underline" to={"/add-product"}>
          Thêm sản phẩm
        </Link>
      </div>
    );

  return (
    <div className="space-y-5">
      {/* Header List */}
      <div className="bg-blue-300 flex font-bold justify-between rounded-b-2xl py-6 px-5">
        <div>Danh sách sản phẩm</div>
        <Link className="hover:underline" to={"/add-product"}>
          Thêm mới sản phẩm
        </Link>
      </div>
      {/* List Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductList;
