import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Header = () => {
  const list = useSelector((state) => state.product.list);

  return (
    <div className="border-b-2 border-gray-200 bg-blue-300">
      <div className="flex justify-between items-center mx-14 py-8">
        <Link to={"/"} className="font-bold">
          Product Management App
        </Link>
        <p className="font-bold italic">Số lượng kho: {list.length}</p>
      </div>
    </div>
  );
};

export default Header;
