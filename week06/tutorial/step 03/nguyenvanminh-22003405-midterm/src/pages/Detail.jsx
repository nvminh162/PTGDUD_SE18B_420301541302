import { Link } from 'react-router-dom'
import img from '../assets/food01.avif'

const Detail = () => {
  return (
    <div className="flex space-x-20 m-20">
      <img src={img} alt="img" width={400}/>
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='font-bold text-2xl'>Phở con bò</h1>
        <p>Giá: 50.000 VND</p>
        <p>Mô tả: Món ăn truyền thống của người Việt Nam</p>
        <div className='space-x-5'>
            <button
                className='bg-red-500 p-3 rounded-2xl text-white border'
                
            >
                Thêm giỏ hàng
            </button>
            <Link to="/" className='bg-gray-300 p-3 rounded-2xl text-black border'>Quay lại</Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
