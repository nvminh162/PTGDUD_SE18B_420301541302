import { Link, useNavigate, useParams } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import Hero from "../components/Hero";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../features/productSlice";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_URL;
  const { data } = useFetch(`${URL}/${id}`);

  const isLoading = useSelector((state) => state.product.isLoading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
    image: null,
  });

  //`data` cập nhật lại khi hành động bất đồng bộ lấy dữ liệu thì sẽ gọi effect 1 lần nữa >,<
  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        name: data.name || "",
        price: data.price || 0,
        description: data.description || "",
        image: data.image || null,
      });
    }
  }, [data]);

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
    dispatch(updateProduct(formData));
    toast.success("Đã cập nhật sản phẩm thành công!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <>
      <Hero />
      <div className="space-y-5">
        {/* Header */}
        <div className="bg-blue-300 flex font-bold justify-between rounded-b-2xl py-6 px-5">
          <Link className="hover:underline" to={"/"}>
            &larr; Quay lại
          </Link>
          <div>Cập nhật sản phẩm</div>
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
                accept="image/*"
                onChange={handleChangeFormData}
              />
            </div>
            <div>
              <label>Ảnh</label>
              <img
                className="h-60 w-60 mt-2 object-cover object-center"
                src={formData.image || placeholder}
                alt={formData.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
          </div>
          <div className="text-end space-x-5">
            <button
              onClick={handleSubmitFormData}
              disabled={isLoading}
              className="bg-green-500 px-5 rounded-2xl py-2 text-white font-bold"
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

export default EditProduct;
