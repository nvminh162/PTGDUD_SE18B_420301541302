import CartItem from '../components/CartItem';
import { useContext } from 'react';
import { FoodContext } from '../context/FoodContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, getCartTotal, getCartQuantity, removeAll } = useContext(FoodContext)

    return (
        <div className='min-h-[400px] mx-30 my-20 space-y-10'>
            <h1 className='text-3xl font-bold text-center my-10'>Giỏ hàng của bạn</h1>
            <div className='space-y-5'>
                {cart.length === 0 ? (
                    <p className="text-center">Giỏ hàng trống</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                hinhAnh={item.hinhAnh}
                                ten={item.ten}
                                gia={item.gia}
                                moTa={item.moTa}
                                quantity={item.quantity}
                            />))
                        }
                        <div className='text-end space-y-5'>
                            <h1 className='text-xl font-bold'>Tổng số lượng: {getCartQuantity()}</h1>
                            <h1 className='text-xl font-bold'>Tổng tiền: {getCartTotal().toLocaleString('vi-VN')}</h1>
                            <Link
                                to='/'
                                onClick={() => removeAll()}
                                className='text-2xl bg-red-500 text-white px-4 py-3 rounded-3xl'
                            >
                                Thanh toán
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart
