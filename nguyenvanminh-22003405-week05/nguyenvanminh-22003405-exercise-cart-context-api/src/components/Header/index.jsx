import logo from "../../assets/logo.PNG";
import avatar from "../../assets/avatar.PNG";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartProvider";
import Badge from "@mui/material/Badge";

const Header = () => {
  const context = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full shadow-md h-[100px] flex items-center justify-between px-5"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <input
          className="outline-1 outline-gray-300 rounded-xl px-5 py-3 w-72 bg-gray-50"
          type="text"
          placeholder="Tìm kiếm..."
        />
      </div>

      <div className="flex items-center space-x-5 text-xl">
        <button className="bg-white p-4 rounded-2xl hover:bg-pink-400 hover:text-white">Menu 1</button>
        <button className="bg-white p-4 rounded-2xl hover:bg-pink-400 hover:text-white">Menu 2</button>
        <button className="bg-white p-4 rounded-2xl hover:bg-pink-400 hover:text-white">Menu 3</button>
        {/* Dropdown area start*/}
        <Menu as="div" className="relative inline-block text-left">
          {
            <>
              <div>
                <MenuButton
                  onClick={() => setIsOpen(!isOpen)}
                  onMouseEnter={() => setIsOpen(true)}
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-2xl font-semibold"
                >
                  <Badge badgeContent={context.cartItems.length} color="error">
                    <FontAwesomeIcon className="hover:text-pink-400" icon={faCartShopping} />
                  </Badge>
                </MenuButton>
              </div>

              {isOpen && (
                <MenuItems
                  static
                  className="absolute p-3 w-[480px] right-0 z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {context.cartItems.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      Không có món ăn nào
                    </div>
                  ) : (
                    context.cartItems.slice(0, 5).map((item) => (
                      <MenuItem key={item.id}>
                        <a
                          href="#"
                          className="block p-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          <div className="flex items-center gap-x-5">
                            <img
                              className="h-[60px] w-[60px] object-cover"
                              src={item.image}
                              alt={item.name}
                            />
                            <div className="w-40">
                              <h3 className="font-bold text-base break-words">
                                {item.name}
                              </h3>
                              <i>
                                {new Intl.NumberFormat("vi-VN").format(
                                  item.price
                                )}
                                {" đ"}
                              </i>
                            </div>
                            <input
                              className="w-10 h-10 rounded-md border border-gray-300 text-base text-center font-medium"
                              value={item.quantity}
                              onChange={(e) => context.updateQuantity(e, item.id)}
                              type="number"
                              name="so_luong"
                              id="so_luong"
                            />
                            <h3 className="w-24 font-medium text-base break-words text-center">
                              {new Intl.NumberFormat("vi-VN").format(
                                item.price * item.quantity
                              )}
                              {" đ"}
                            </h3>
                            <button
                              className="text-black hover:text-red-500 text-xl"
                              onClick={() => context.handleRemoveItem(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                          </div>
                        </a>
                      </MenuItem>
                    ))
                  )}
                  {context.cartItems.length > 0 && (
                    <div className="p-5">
                      <div className="flex justify-between gap-x-5">
                        <h3 className="text-lg font-semibold">Số lượng:</h3>
                        <h3 className="text-lg font-semibold pb-5">
                          {new Intl.NumberFormat("vi-VN").format(
                            context.cartItems.reduce(
                              (total, item) => total + item.quantity,
                              0
                            )
                          )}
                        </h3>
                      </div>
                      <div className="flex justify-between gap-x-5">
                        <h3 className="text-lg font-semibold">Tổng cộng:</h3>
                        <h3 className="text-lg font-semibold pb-5">
                          {new Intl.NumberFormat("vi-VN").format(
                            context.cartItems.reduce(
                              (total, item) => total + item.price * item.quantity,
                              0
                            )
                          )}
                          {" đ"}
                        </h3>
                      </div>
                      <div className="flex justify-end gap-x-5">
                        <button className="bg-gray-800 text-white px-3 py-2 hover:text-pink-400 rounded-2xl">Xem giỏ hàng</button>
                        <button className="bg-pink-400 text-white px-3 py-2 hover:text-black rounded-2xl">Thanh toán</button>
                      </div>
                    </div>
                  )}
                </MenuItems>
              )}
            </>
          }
        </Menu>
        {/*  Dropdown area end*/}
        <img className="w-15 h-15 rounded-full" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
