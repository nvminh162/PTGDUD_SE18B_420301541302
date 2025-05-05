import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import hero from './assets/hero.webp';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <img src={hero} alt="hero" />
                <div className="min-h-screen max-w-7xl px-10 mx-auto space-y-5 my-10">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="add" element={<AddProduct />} />
                        <Route path="edit/:id" element={<EditProduct />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
