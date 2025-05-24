import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchOrders, createOrder } from "../features/orderDeliverySlice";
import { ClockLoader, GridLoader, MoonLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { resetCart } from "../features/cartSlice";

const Order = () => {
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.order.orders);
  const isLoading = useSelector((state) => state.order.isLoading);
  const error = useSelector((state) => state.order.error);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const valueDefault = {
    id: uuidv4(),
    name: "",
    address: "",
    orders: cart,
  };
  const [formData, setFormData] = useState(valueDefault);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFormData = () => {
    if (!formData.name || !formData.address) {
      toast.info("Vui lòng nhập đủ các trường dữ liệu");
      return;
    }
    dispatch(createOrder(formData));
    dispatch(resetCart())
    toast.success("Đã đặt hàng thành công!");
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

  if (cart.length === 0)
    return (
      <div className="flex justify-center items-center mt-20 space-x-2">
        <GridLoader />
        <div className="font-bold ml-3">
          Chưa có sản phẩm nào trong giỏ hàng
        </div>
      </div>
    );

  return (
    <div className="my-10 space-y-5">
      <div className="bg-green-500 flex justify-between items-center font-bold p-5 rounded-b-2xl">
        <Link to={"/product-list"} className="hover:underline">
          &larr; Quay lại
        </Link>
        <div>Quản lý đơn hàng</div>
      </div>
      <div className="space-y-10">
        {/* Tên */}
        <div>
          <label>Tên khách hàng</label>
          <input
            name="name"
            className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
            type="text"
            value={formData.name}
            onChange={handleChangeFormData}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        {/* Địa chỉ */}
        <div>
          <label>Địa chỉ</label>
          <input
            name="address"
            className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
            type="text"
            value={formData.address}
            onChange={handleChangeFormData}
            placeholder="Nhập địa chỉ"
          />
        </div>
        {/* Số lượng & Tổng tiền */}
        <div className="flex justify-between gap-10">
          <div className="w-full">
            <label>Số lượng</label>
            <input
              name="amount"
              className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
              type="number"
              disabled
              value={cart.length}
            />
          </div>
          <div className="w-full">
            <label>Tổng tiền</label>
            <input
              name="amount"
              className="w-full border-2 border-gray-300 p-2 rounded-2xl mt-2"
              type="number"
              disabled
              value={totalPrice}
            />
          </div>
        </div>
        {/* button */}
        <div className="text-end space-x-5">
          <button
            onClick={handleSubmitFormData}
            className="bg-green-500 px-5 rounded-2xl py-2 text-white font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Đang lưu ..." : "Lưu"}
          </button>
        </div>
      </div>{" "}
      <div>
        <h1 className="font-bold text-2xl">Danh sách khách hàng</h1>
        {orders.length > 0 ? (
          <div>
            {orders.map((order) => (
              <div key={order.id} className="border p-4 my-2 rounded-lg">
                <p>
                  <strong>Khách hàng:</strong> {order.name}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {order.address}
                </p>
                <p>
                  <strong>Số sản phẩm:</strong> {order.orders?.length || 0}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">Chưa có đơn hàng nào</div>
        )}
      </div>
    </div>
  );
};

export default Order;
