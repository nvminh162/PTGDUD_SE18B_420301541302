import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartModal from "./CartModal";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-between items-center bg-blue-500 p-10 font-bold">
      <Link to={"/"} className="text-white text-2xl">E-Commerce App</Link>
      <div className="space-x-10">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white underline decoration-2 underline-offset-5 text-base"
              : "text-white text-base"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/product-list"}
          className={({ isActive }) =>
            isActive
              ? "text-white underline decoration-2 underline-offset-5 text-base"
              : "text-white text-base"
          }
        >
          Product
        </NavLink>
        <NavLink
          to={"/order"}
          className={({ isActive }) =>
            isActive
              ? "text-white underline decoration-2 underline-offset-5 text-base"
              : "text-white text-base"
          }
        >
          Order
        </NavLink>
        <button
          onClick={toggleModal}
          className="text-white text-base bg-green-500 px-3 py-2 rounded-2xl"
        >
          Cart: ({cart.length})
        </button>

        {isModalOpen && <CartModal toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default Header;
