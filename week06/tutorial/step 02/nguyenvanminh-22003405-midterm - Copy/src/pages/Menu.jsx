import food01 from '../assets/food01.avif'

const Menu = () => {
  return (
    <div className="space-y-10 my-10">
      {/* item 1 */}
      <div className="text-center space-y-5">
        <h1 className="font-bold text-4xl">Thực đơn</h1>
        <p>Khám phá món ăn truyền thống ...</p>
      </div>
      {/* item 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-30">
        {/* Card item demo*/}
        <div className="bg-gray-200 space-y-5 p-5 rounded-2xl">
          {/* Card item 2.1 */}
          <div className='place-self-center'>
            <img src={food01} alt="food demo" />
          </div>
          {/* Card item 2.2 */}
          <div className='space-y-3'>
            <h1 className='font-bold text-xl'>Phở bò</h1>
            <p>200.999đ</p>
            <p>Mô tả món ăn ...</p>
          </div>
          {/* Card item 2.3 */}
          <div className='flex justify-between'>
            <button className='text-white bg-red-500 p-3 rounded-2xl border'>Thêm giỏ hàng</button>
            <button className='text-black bg-gray-300 p-3 rounded-2xl border'>Xem chi tiết</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu