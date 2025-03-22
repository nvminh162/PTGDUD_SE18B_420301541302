import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-red-500 h-20 text-white flex items-center justify-between">
            {/* Item 1 */}
            <div className="mx-10 font-bold">Nha Hang ABC</div>
            {/* Item 2 */}
            <div className="mx-10 font-bold space-x-5">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <button className="bg-amber-500 border border-black p-2 rounded-full text-black">Đặt bàn</button>
            </div>
        </div>
    )
}

export default Header
