import { Link } from "react-router-dom"

const MenuList = ({ id, hinhAnh, ten, gia, moTa }) => {
    return (
        <div className="bg-gray-200 space-y-5 p-5 rounded-2xl hover:scale-105">
            {/* Card item 2.1 */}
            <div className='place-self-center'>
                <img src={hinhAnh} alt="food demo" />
            </div>
            {/* Card item 2.2 */}
            <div className='space-y-3'>
                <h1 className='font-bold text-xl'>{ten}</h1>
                <p>{gia.toLocaleString('vi-VN')}</p> {/* Chuyển đổi dạng tiền tệ */}
                <p>{moTa}</p>
            </div>
            {/* Card item 2.3 */}
            <div className='flex justify-between'>
                <button className='text-white bg-red-500 p-3 rounded-2xl border'>Thêm giỏ hàng</button>
                <Link to={`/food/${id}`}  className='text-black bg-gray-300 p-3 rounded-2xl border'>Xem chi tiết</Link>
            </div>

        </div>
    )
}

export default MenuList
