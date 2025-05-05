import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Header = () => {
    const products = useSelector(state => state.product.products)

    return (
        <div className="border-b-2 border-b-gray-300">
            <div className="max-w-7xl px-10 flex justify-between mx-auto py-5">
                <Link to="/" className="flex items-center gap-2">
                    <span className="font-bold text-xl">Product Management</span>
                </Link>
                <div className='flex items-center gap-2 font-bold'>
                    Số lượng sản phẩm: {products.length}
                </div>
            </div>
        </div>
    );
};

export default Header;
