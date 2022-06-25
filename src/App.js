import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import CheckOut from'./components/CheckOut'
import ContactUs from'./components/ContactUs'
import NavBar from "./components/NavBar"
import { Food, CoffeeAndTea, LocalBeer, ProductProvider } from './components/Products'
import Footer from './components/Footer'
import homeImage from './img/home.jpg'
import {CartProvider} from './components/cartContext'
import { useState } from "react";

function App() {

  const homeBackground = homeImage;


  return (    
    <div id='App' style={{ backgroundImage: `url(${homeBackground})`,backgroundSize: 'cover' }}>
      <HashRouter> 
      <ProductProvider>
      <CartProvider>
        
         
          {/* inserts tha navbar that will be displayed on all pages */}
              <NavBar />
              {/* Creats Routes to each page linking to each component */}
              <Routes>
                  <Route path="mock-store/" element={<Home />} /> 
                  <Route path="/Shop" element={<Shop  />} />
                  <Route path="/ContactUs" element={<ContactUs />} />
                  <Route path="/CheckOut" element={<CheckOut />} />
              </Routes>
              <Footer />
        
      
      </CartProvider> </ProductProvider>  
      </HashRouter>
    </div>
  );
}

export default App;
