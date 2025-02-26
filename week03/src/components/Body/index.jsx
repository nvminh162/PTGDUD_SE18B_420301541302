import Filter from "./Filter"
import Content from './Content';

const Body = () => {
  return (
    <div className="max-w-7xl m-auto grid grid-cols-4 min-h-screen my-5">
      <Filter className="col-span-1"/>
      <Content className="col-span-3 "/>
    </div>
  )
}

export default Body
