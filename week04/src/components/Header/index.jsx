import logo from "../../assets/logo.PNG";
import avatar from "../../assets/avatar.PNG";

const Header = () => {
  return (
    <div className="w-full shadow-md h-[100px] flex items-center justify-between px-5">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <input
          className="outline-1 outline-gray-300 rounded-xl px-5 py-3 w-72 bg-gray-50"
          type="text"
          placeholder="cakescascsa"
        />
      </div>
      <div className="flex items-center space-x-5">
        <ul className="flex space-x-5">
          <li className="text-base font-medium py-3 px-4 rounded-full text-gray-700 hover:bg-pink-300">
            Menu 1
          </li>
          <li className="text-base font-medium py-3 px-4 rounded-full text-gray-700 hover:bg-pink-300">
            Menu 2
          </li>
          <li className="text-base font-medium py-3 px-4 rounded-full text-gray-700 hover:bg-pink-300">
            Menu 3
          </li>
          <li className="text-base font-medium py-3 px-4 rounded-full text-gray-700 hover:bg-pink-300">
            Menu 4
          </li>
          <li className="text-base font-medium py-3 px-4 rounded-full text-gray-700 hover:bg-pink-300">
            Menu 5
          </li>
        </ul>
        <button className="bg-pink-300 text-pink-950 text-base px-5 py-3 rounded-xl">Your Recipe Box</button>
        <img className="w-15 h-15 rounded-full" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
