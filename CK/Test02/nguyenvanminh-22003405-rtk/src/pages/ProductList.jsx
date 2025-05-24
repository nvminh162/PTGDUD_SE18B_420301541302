import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { Link } from 'react-router-dom'
import ProductCard from "../components/ProductCard";
import { ClockLoader, MoonLoader, GridLoader } from "react-spinners";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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

  if (products.length === 0)
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
    <div className="my-10">
      <div className="bg-green-500 flex justify-between items-center font-bold p-5 rounded-b-2xl">
        <Link to={"/"} className="hover:underline">&larr; Quay lại</Link>
        <div>Danh sách sản phẩm</div>
        <Link to={"/add-product"} className="hover:underline">Thêm sản phẩm</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {products.map(item => <ProductCard key={item.id} data={item}/>)}
      </div>
    </div>
  );
};

export default ProductList;
