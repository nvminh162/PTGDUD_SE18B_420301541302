import { useContext } from "react"
import { Link } from "react-router-dom"
import { FoodContext } from "../context/FoodContext"

const MenuList = ({ id, hinhAnh, ten, gia, moTa }) => {
    const { addToCart } = useContext(FoodContext)

    return (
        <div className="bg-gray-200 space-y-5 p-5 rounded-2xl hover:scale-105">
            {/* Card item 2.1 */}
            <div className='place-self-center'>
                <img src={hinhAnh} alt="food" />
            </div>
            {/* Card item 2.2 */}
            <div className='space-y-3'>
                <h1 className='font-bold text-xl'>{ten}</h1>
                <p>{gia.toLocaleString('vi-VN')}</p>
                <p>{moTa}</p>
            </div>
            {/* Card item 2.3 */}
            <div className='flex justify-between'>
                <button
                    className='text-white bg-red-500 p-3 rounded-2xl border'
                    onClick={() => addToCart(id)}
                >
                    Thêm giỏ hàng
                </button>
                <Link to={`/food/${id}`} className='text-black bg-gray-300 p-3 rounded-2xl border'>Xem chi tiết</Link>
            </div>
        </div>
    )
}

export default MenuList
