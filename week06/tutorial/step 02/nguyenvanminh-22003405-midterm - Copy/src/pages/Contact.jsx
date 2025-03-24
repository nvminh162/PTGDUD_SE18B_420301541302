const Contact = () => {
  return (
    <div className="py-10">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-3xl">Liên hệ với tui</h1>
        <p>Ghi mô tả gì cũng được ...</p>
      </div>
      {/* form */}
      <div className="flex flex-col space-y-5 mx-10">
        {/* item 1 */}
        <label>Họ và tên</label>
        <input type="text" placeholder="Nhập họ và tên của bạn" className="p-3 border rounded-2xl" />
        {/* item 2 */}
        <label>Họ và tên</label>
        <input type="text" placeholder="Nhập họ và tên của bạn" className="p-3 border rounded-2xl" />
        {/* item 3 */}
        <label>Họ và tên</label>
        <input type="text" placeholder="Nhập họ và tên của bạn" className="p-3 border rounded-2xl" />
        {/* button */}
        <button onClick={() => alert("Cảm ơn đã liên hệ")} className="text-white bg-red-500 p-3 rounded-2xl border">Gửi</button>
      </div>
    </div>
  )
}

export default Contact