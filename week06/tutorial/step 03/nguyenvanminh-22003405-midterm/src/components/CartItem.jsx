
const CartItem = ({ id, hinhAnh, ten, gia, moTa }) => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex space-x-5'>
                    <img src={hinhAnh} alt="food1" width={150} />
                    <div className='space-y-3'>
                        <h1 className='text-xl font-bold'>{ten}</h1>
                        <i>{moTa}</i>
                        <p className="font-medium">{gia.toLocaleString('vi-VN')}</p>
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className='space-x-3'>
                        <button className='px-3 py-1 bg-gray-300 border rounded-xl'>-</button>
                        <span>1</span>
                        <button className='px-3 py-1 bg-gray-300 border rounded-xl'>+</button>
                    </div>
                    <div className='text-xl font-bold'>100.000đ</div>
                    <button className='text-3xl text-red-600'>&times;</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem
