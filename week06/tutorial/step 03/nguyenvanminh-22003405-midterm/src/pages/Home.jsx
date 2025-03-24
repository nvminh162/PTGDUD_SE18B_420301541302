import homeImg from '../assets/home.jpg'

const Home = () => {
  return (
    <div className="flex justify-evenly items-center py-20 bg-red-500 text-white">
      {/* item 1 */}
      <div className='space-y-5'>
        <h1 className='font-bold text-3xl'>Nhà hàng ABC</h1>
        <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
        <p>Điện thoại: 0123 456 789</p>
      </div>
      {/* item 2 */}
      <div>
        <img src={homeImg} alt="home" width={500}/>
      </div>
    </div>
  )
}

export default Home
