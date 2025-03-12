import logoTwo from '../../assets/logo2.png';

const Footer = () => {
  return (
    <div className="w-full min-h-52 grid grid-cols-2 text-white bg-gray-900 gap-60">
      {/* Item 1 */}
      <div className="col-span-1 p-7 h-full">
        <div className="grid grid-cols-1 gap-20">
          <div className="space-y-3">
            <h3 className="text-[20px] font-extrabold">About us</h3>
            <p className="text-base font-medium text-[14px]">
              This is paragraph
            </p>
            <input
              className="text-black bg-white px-3 py-2 rounded-xl mr-3 w-96"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-pink-400 text-white px-3 py-2 rounded-xl font-semibold">
              Send
            </button>
          </div>
          <div className="flex items-center space-x-8">
            <img className='font-bold' src={logoTwo} alt="logo" />
            <div className='font-bold'>@2023 IUH University</div>
            <div className='font-bold'>Term of servicel divrivacy policy</div>
          </div>
        </div>
      </div>
      {/* Item 2 */}
      <div className="col-span-1 p-7">
        <div className="grid grid-cols-2 h-full gap-30">
          {/* Item 2.1 */}
          <div className="grid grid-cols-1 gap-20">
            <div className="flex flex-col space-y-3">
              <h4 className="font-extrabold text-[20px]">Learn more</h4>
              <a className="text-base font-medium" href="#">
                Footer nav 1
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 2
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 3
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-extrabold text-[20px]">Shop</h4>
              <a className="text-base font-medium" href="#">
                Footer nav 1
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 2
              </a>
            </div>
          </div>
          {/* Item 2.2 */}
          <div className="col-span-1">
            <div className="flex flex-col space-y-3">
              <h4 className="font-extrabold text-[20px]">Recipes</h4>
              <a className="text-base font-medium" href="#">
                Footer nav 1
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 2
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 3
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 4
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 5
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 6
              </a>
              <a className="text-base font-medium" href="#">
                Footer nav 7
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
