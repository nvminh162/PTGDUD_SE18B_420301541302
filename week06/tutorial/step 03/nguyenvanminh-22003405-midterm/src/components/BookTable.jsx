const BookTable = ({ handleModal }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-black bg-white rounded-lg w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Đặt bàn</h2>
                    <button onClick={handleModal}>Đóng</button>
                </div>

                <div className="space-y-5">
                    {/* input 1 ... copy - paste .... */}
                    <div>
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full p-2 border mt-2"
                        />
                    </div>
                    {/* input 2 ... copy - paste .... */}
                    <div>
                        <label>Số phone</label>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full p-2 border mt-2"
                        />
                    </div>
                    {/* input 3 ... copy - paste .... */}
                    <div>
                        <label>Số người</label>
                        <input
                            // chuyển qua number chỉ cho nhập số => còn lại text
                            type="number"
                            placeholder="Số người"
                            className="w-full p-2 border mt-2"
                        />
                    </div>
                    {/* input 4 ... copy - paste .... */}
                    <div>
                        <label>Ghi chú</label>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full p-2 border mt-2"
                        />
                    </div>
                    {/* Nút gửi */}
                    <button 
                        className="w-full bg-red-600 text-white py-2 rounded"
                        onClick={() => { 
                            alert("Đặt bàn thành công"); 
                            handleModal(); 
                        }}
                    >Xác nhận đặt bàn</button>
                </div>
            </div>
        </div>
    )
}

export default BookTable