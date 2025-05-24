import { useDispatch, useSelector } from "react-redux";
import { formatVND } from "../util/formatVND.js";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ toggleModal }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[700px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Cart</h3>
            <button
              onClick={toggleModal}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="py-2 border-b flex justify-between">
                  <div>
                    <p className="text-gray-800">{item.name}</p>
                    <p className="text-gray-800">{formatVND(item.price)}đ</p>
                  </div>
                  <div className="flex justify-center items-center space-x-5">
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </button>
                    <p className="text-gray-800">{item.quantity}</p>
                    <button onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                  <div>
                    <p>{formatVND(item.price * item.quantity)}đ</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty</p>
            )}
          </div>
          {cart.length > 0 && (
            <div className="mt-4 py-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total:</span>
                <span className="font-bold text-lg">{formatVND(totalPrice)}đ</span>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            <button
              onClick={toggleModal}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
            >
              Đóng cửa
            </button>
            <Link onClick={toggleModal} to={"/order"} className="bg-green-500 text-white px-4 py-2 rounded">
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
