import { Link } from "react-router-dom"
import { useState } from "react"
import BookTable from "./BookTable"

const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className="bg-red-800 h-20 text-white flex items-center justify-between">
            {/* Item 1 */}
            <div className="mx-10 font-bold">Nha Hang ABC</div>
            {/* Item 2 */}
            <div className="mx-10 font-bold space-x-5">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/cart">Giỏ hàng</Link>
                <Link to="/contact">Contact</Link>

                {/* Modal */}
                <button
                    onClick={handleModal}
                    className="bg-amber-500 border border-black p-2 rounded-full text-black"
                >
                    Đặt bàn
                </button>
            </div>

            {/* Modal */}
            {/* Gia thich
                ở trên tạo useState dạng true false để điều khiển việc hiển thị modal (mặc định là false ko hiện)
                
                - Giải thích giá trị
                    showModal && <BookTable handleModal={handleModal}
                    + (true && true => true)
                    + (false && true => false)
                
                <BookTable handleModal={handleModal} => là components luôn là true
                    + (true && <BookTable handleModal={handleModal} => true) => tức là modal sẽ hiện (***)
                    + (false && <BookTable handleModal={handleModal} => false) => tức là modal sẽ ẩn (***)
            */}
            
            {showModal && <BookTable handleModal={handleModal} />} {/* (***) */}
        </div>
    )
}

export default Header
