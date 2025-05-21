import { Link, useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import Hero from "../components/Hero";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../features/productSlice";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.product.isLoading);

  const valueDefault = {
    id: uuidv4(),
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

  const handleSubmitFormData = () => {
    if (!formData.name || !formData.price || !formData.description) {
      toast.info("Vui lòng nhập đủ các trường dữ liệu");
      return;
    }
    dispatch(postProduct(formData));
    toast.success("Đã thêm sản phẩm thành công!");
    setTimeout(() => navigate("/"), 2000);
  };

  const handleCancel = () => setFormData(valueDefault);

  return (
    <>
      <Hero />
      <div className="space-y-5">
        {/* Header */}
        <div className="bg-blue-300 flex font-bold justify-between rounded-b-2xl py-6 px-5">
          <Link className="hover:underline" to={"/"}>
            &larr; Quay lại
          </Link>
          <div>Thêm mới sản phẩm</div>
        </div>
        {/* Form */}
        <div className="space-y-10 px-5">
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
          <div>
            <label>Mô tả sản phẩm</label>
            <textarea
              name="description"
              className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
              type="text"
              value={formData.description}
              onChange={handleChangeFormData}
              placeholder="Nhập mô tả sản phẩm"
            />
          </div>
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
              <label>Ảnh</label>
              <img
                className="h-60 w-60 mt-2 object-cover object-center"
                src={formData.image || placeholder}
                alt="preview"
              />
            </div>
          </div>
          <div className="text-end space-x-5">
            <button
              onClick={handleCancel}
              className="bg-red-500 px-5 rounded-2xl py-2 text-white font-bold"
            >
              Huỷ
            </button>
            <button
              onClick={handleSubmitFormData}
              className="bg-green-500 px-5 rounded-2xl py-2 text-white font-bold"
              disabled={isLoading}
            >
              {isLoading ? "Đang lưu ..." : "Lưu"}
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AddProduct;
