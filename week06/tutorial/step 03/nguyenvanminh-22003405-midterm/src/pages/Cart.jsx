import jsonData from '../data/data.json'
import CartItem from './../components/CartItem';

const Cart = () => {
    return (
        <div className='min-h-[400px] mx-30 my-20 space-y-10'>
            <h1 className='text-3xl font-bold text-center my-10'>Giỏ hàng của bạn</h1>
            <div className='space-y-5'>
                {jsonData.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        hinhAnh={item.hinhAnh}
                        ten={item.ten}
                        gia={item.gia}
                        moTa={item.moTa}
                    />
                ))}
            </div>
            <div className='text-end space-y-5'>
                <h1 className='text-xl font-bold'>Tổng số lượng: {1}</h1>
                <h1 className='text-xl font-bold'>Tổng tiền: {1}</h1>
                <button className='text-2xl bg-red-500 text-white px-4 py-3 rounded-3xl'>Thanh toán</button>
            </div>
        </div>
    )
}

export default Cart
