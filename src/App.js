import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import Diet from "./Screens/Diet";
import CartScreen from "./Screens/CartScreen";
import AboutUs from "./Screens/AboutUs";
import Footer from "./components/Footer";
import ProductsPage from "./Screens/ProductsPage";
import ProductDetails from "./Screens/ProductDetails";
import OrderPlaced from "./components/OrderPlaced";
function App() {
 

  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/Diet" element={<Diet />} />
        <Route path="/Cart" element={<CartScreen />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/OrderPlaced" element={<OrderPlaced />} />
        <Route path="/ProductsPage/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
   
}

export default App;
