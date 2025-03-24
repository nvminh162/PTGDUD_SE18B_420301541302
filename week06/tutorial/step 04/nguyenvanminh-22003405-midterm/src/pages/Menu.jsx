import { useContext } from 'react'
import MenuList from '../components/MenuList'
import { FoodContext } from '../context/FoodContext'

const Menu = () => {
  const { data } = useContext(FoodContext)

  return (
    <div className="space-y-10 my-10">
      {/* item 1 */}
      <div className="text-center space-y-5">
        <h1 className="font-bold text-4xl">Thực đơn</h1>
        <p>Khám phá món ăn truyền thống ...</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-30">
        {/* Card item demo*/}
        {data.map((item, index) => (
          <MenuList
            key={index}
            id={item.id}
            hinhAnh={item.hinhAnh}
            ten={item.ten}
            gia={item.gia}
            moTa={item.moTa}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu