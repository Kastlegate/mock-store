import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import CheckOut from'./components/CheckOut'
import About from'./components/About'
import NavBar from "./components/NavBar"
import Products from './components/Products'
import Footer from './components/Footer'
import homeImage from './img/home.jpg'
import { useState } from "react";

function App() {

  const homeBackground = homeImage;
  // shopping cart array to hold objects being bought
  const [shoppingCart, setShoppingCart] = useState([])
  const [storeProducts, setProducts] = useState(Products)
  const [total, setTotal] = useState(0);

  return (    
    <div id='App' style={{ backgroundImage: `url(${homeBackground})`,backgroundSize: 'cover' }}>
     <BrowserRouter> 
      {/* inserts tha navbar that will be displayed on all pages */}
          <NavBar total={total}/>
          {/* Creats Routes to each page linking to each component */}
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/Shop" element={<Shop products={storeProducts} setTotal={setTotal}/>} />
              <Route path="/About" element={<About />} />
              <Route path="/CheckOut" element={<CheckOut />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
