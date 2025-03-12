import { createContext, useEffect, useState } from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import foodJSON from "../data/foodMocks.json";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // data local
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const matchedItems = foodJSON
            .filter((food) => cart.some((cartItem) => cartItem.id === food.id))
            .map((food) => {
                const cartItem = cart.find((item) => item.id === food.id);
                return { ...food, quantity: cartItem.quantity };
            });
        setCartItems(matchedItems);
    }, []);

    const addToCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        setCartItems((prevItems) => {
            const foodItem = foodJSON.find((food) => food.id === id);
            const existingCartItem = prevItems.find((item) => item.id === id);

            if (existingCartItem) {
                return prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...foodItem, quantity: 1 }];
            }
        });

        toast.success("Đã thêm vào giỏ hàng!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    //Delete item in cart
    const handleRemoveItem = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

        toast.info("Đã xóa khỏi giỏ hàng!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    // Change quantity of item in cart
    const updateQuantity = (event, id) => {
        const newQuantity = parseInt(event.target.value, 10);

        if (newQuantity < 1) {
            handleRemoveItem(id);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, handleRemoveItem, updateQuantity }}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
