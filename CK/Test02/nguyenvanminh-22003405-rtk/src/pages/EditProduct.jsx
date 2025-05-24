import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProduct, fetchProductById } from "../features/productSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

import placeholder from "../assets/placeholder.png";
import { MoonLoader } from "react-spinners";

const EditProduct = () => {
  const product = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const valueDefault = {
    id: "",
    name: "",
    price: 0,
    description: "",
    image: null,
  };
  const [formData, setFormData] = useState(valueDefault);

  const handleChangeFormData = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () =>
          setFormData({ ...formData, image: reader.result });
        reader.readAsDataURL(file);
      }
    } else if (type === "number")
      setFormData({ ...formData, [name]: Number(value) });
    else setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id || "",
        name: product.name || "",
        description: product.description || "",
        price: product.price || 0,
        image: product.image || null,
      });
    }
  }, [product]);

  const handleSubmitFormData = () => {
    if (!formData.name || !formData.price || !formData.description) {
      toast.info("Vui lòng nhập đủ các trường dữ liệu");
      return;
    }
    dispatch(updateProduct(formData));
    toast.success("Đã cập nhật sản phẩm thành công!");
    setTimeout(() => navigate("/product-list"), 2000);
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
    <div className="my-10 space-y-5">
      <div className="bg-green-500 flex justify-between items-center font-bold p-5 rounded-b-2xl">
        <Link to={"/product-list"} className="hover:underline">
          &larr; Quay lại
        </Link>
        <div>Thêm sản phẩm</div>
      </div>
      <div className="space-y-10">
        {/* Tên */}
        <div>
          <label>Tên sản phẩm</label>
          <input
            name="name"
            className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
            type="text"
            value={formData.name}
            onChange={handleChangeFormData}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        {/* Giá */}
        <div>
          <label>Giá sản phẩm</label>
          <input
            name="price"
            className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
            type="number"
            value={formData.price}
            onChange={handleChangeFormData}
            placeholder="Nhập giá sản phẩm"
          />
        </div>
        {/* Mô tả */}
        <div>
          <label>Mô tả sản phẩm</label>
          <input
            name="description"
            className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
            type="text"
            value={formData.description}
            onChange={handleChangeFormData}
            placeholder="Nhập mô tả sản phẩm"
          />
        </div>
        {/* Hình ảnh */}
        <div className="flex justify-between">
          <div>
            <label>Hình ảnh sản phẩm (Không bắt buộc)</label>
            <br />
            <input
              name="image"
              className="border-2 border-gray-300 p-2 rounded-2xl mt-2"
              type="file"
              onChange={handleChangeFormData}
            />
          </div>
          <div>
            <label>Ảnh xem trước</label>
            <img
              className="h-60 w-60 mt-2 object-cover object-center"
              src={formData.image || placeholder}
              alt="preview"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholder;
              }}
            />
          </div>
        </div>
        {/* Button */}
        <div className="text-end space-x-5">
          <button
            onClick={handleSubmitFormData}
            className="bg-green-500 px-5 rounded-2xl py-2 text-white font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Đang lưu ..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
