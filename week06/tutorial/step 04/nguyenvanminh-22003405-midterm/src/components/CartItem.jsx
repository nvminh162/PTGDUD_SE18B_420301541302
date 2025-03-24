import { useContext } from "react"
import { FoodContext } from "../context/FoodContext"


const CartItem = ({ id, hinhAnh, ten, gia, moTa, quantity }) => {
    const { removeFromCart, updateQuantity } = useContext(FoodContext)

    return (
        <>
            <div className='flex justify-between'>
                <div className='flex space-x-5'>
                    <img src={hinhAnh} alt="food1" width={150} />
                    <div className='space-y-3'>
                        <h1 className='text-xl font-bold'>{ten}</h1>
                        <i>{moTa}</i>
                        <p className="font-medium">{gia.toLocaleString('vi-VN')}</p>
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className='space-x-3'>
                        <button
                            onClick={() => updateQuantity(id, quantity - 1)}
                            className='px-3 py-1 bg-gray-300 border rounded-xl'
                        >-</button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => updateQuantity(id, quantity + 1)}
                            className='px-3 py-1 bg-gray-300 border rounded-xl'
                        >+</button>
                    </div>
                    <div className='text-xl font-bold'>{(quantity * gia).toLocaleString('vi-VN')}</div>
                    <button
                        className='text-3xl text-red-600'
                        onClick={() => removeFromCart(id)}
                    >&times;</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem
