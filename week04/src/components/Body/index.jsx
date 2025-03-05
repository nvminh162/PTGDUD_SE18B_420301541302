import Breadcrumb from "./Breadcrumb";
import Introduce from "./Introduce/index";
import CardItem from "./CardItem/index";
import Pagination from "./Pagination/index";

const Body = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* Introduce */}
        <Introduce />
        {/* NavLink */}
        {/* CardItem */}
        <CardItem />
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Body;
