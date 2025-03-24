import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { FoodContext } from './../context/FoodContext';

const Detail = () => {
  const { id } = useParams();
  const { data, addToCart } = useContext(FoodContext);
  const detailItem = data.find(item => item.id === parseInt(id));

  if (!detailItem) {
    return <h1 className='flex justify-center items-center min-h-[450px]'>Không tìm thấy sản phẩm</h1>
  }

  console.log(detailItem.hinhAnh);

  return (
    <div className="flex space-x-20 m-20">
      <img src={detailItem.hinhAnh} alt="img" width={400} />
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='font-bold text-2xl'>{detailItem.ten}</h1>
        <p>Giá: {(detailItem.gia).toLocaleString('vi-VN')} VND</p>
        <p>Mô tả: {detailItem.moTa}</p>
        <div className='space-x-5'>
          <button
            onClick={() => addToCart(detailItem.id)}
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
