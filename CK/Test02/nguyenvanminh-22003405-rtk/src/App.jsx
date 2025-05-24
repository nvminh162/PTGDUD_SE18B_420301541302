import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DetailProduct from "./pages/DetailProduct";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="min-h-screen container mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/order" element={<Order />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
