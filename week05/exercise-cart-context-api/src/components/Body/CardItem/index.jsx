import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import foodJSON from "../../../data/foodMocks.json";

import { CartContext } from "../../../context/CartProvider";

const CardItem = () => {
  const context = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-10">
      {foodJSON.map((item) => (
        <div
          key={item.id}
          className="w-[300px] rounded-md outline-1 outline-gray-300 group"
        >
          <img
            className="w-[300px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-400 ease-in-out"
            src={item.image}
            alt={item.name}
          />
          <div className="relative p-5 space-y-2">
            <h1 className="font-bold text-base">{item.name}</h1>
            <i className="bg-pink-200 px-1.5 py-1 rounded-xl font-medium text-[14px] text-black">
              {new Intl.NumberFormat("vi-VN").format(item.price)} đ
            </i>
            <button
              className="absolute bottom-5 right-5 outline-1 w-[40px] h-[40px] text-black outline-pink-400 hover:bg-pink-400 hover:text-white p-2 rounded-full flex justify-center items-center bg-pink-400"
              onClick={() => context.addToCart(item.id)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
