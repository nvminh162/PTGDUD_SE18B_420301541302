import { createContext, useEffect, useState } from "react";
import data from '../data/data.json'

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const saveCart = localStorage.getItem('cart')
        if (saveCart) {
            setCart(JSON.parse(saveCart))
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id) => {
        const food = data.find(item => item.id === id);
        const exist = cart.find(item => item.id === id);
        const newCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
        if (exist) {
            setCart(newCart)
        } else {
            setCart([...cart, { ...food, quantity: 1 }])
        }
        alert('Thêm giỏ hàng thành công');
    }

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id)
        } else {
            const newCart = cart.map(item => item.id === id ? { ...item, quantity } : item);
            setCart(newCart)
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const removeAll = () => { 
        setCart([]); 
        alert('Cảm ơn quý khách đã mua hàng') 
    }

    const getCartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.gia), 0);

    const getCartQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <FoodContext.Provider value={{ data, cart, addToCart, getCartTotal, getCartQuantity, removeFromCart, updateQuantity, removeAll }}>
            {children}
        </FoodContext.Provider>
    )
}