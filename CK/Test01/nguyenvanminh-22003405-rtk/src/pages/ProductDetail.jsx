import { Link, useParams } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import useFetch from "../hooks/useFetch";
import { ClockLoader, MoonLoader } from "react-spinners";
import { formatVND } from '../util/formatVND'

const ProductDetail = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_URL;
  const { data, isLoading, error } = useFetch(`${URL}/${id}`);

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
    <div className="my-10 grid grid-cols-1 md:grid-cols-2">
      <img
        className="w-full h-80 object-cover object-center"
        src={data.image || placeholder}
        alt={data.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
      <div className="space-y-6 p-8">
        <h1 className="font-bold text-xl">{data.name}</h1>
        <p className="">{data.description}</p>
        <p className="font-bold italic text-xl">{formatVND(Number(data.price))}đ</p>
      </div>
    </div>
  );
};

export default ProductDetail;
