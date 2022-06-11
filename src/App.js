import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import CheckOut from'./components/CheckOut'
import ContactUs from'./components/ContactUs'
import NavBar from "./components/NavBar"
import { Food, CoffeeAndTea, LocalBeer } from './components/Products'
import Footer from './components/Footer'
import homeImage from './img/home.jpg'
import {CartProvider} from './components/cartContext'
import { useState } from "react";

function App() {

  const homeBackground = homeImage;
  // shopping cart array to hold objects being bought
  const [shoppingCart, setShoppingCart] = useState([])
  const [total, setTotal] = useState(0);
  const [food, setFood] = useState(Food)
  const [localBeer, setLocalBeer] = useState(LocalBeer)
  const [coffeeAndTea, setCoffeeAndTea] = useState(CoffeeAndTea)

  const incrementFood = (count) =>{
    setFood(food[0].count + 1);
  }

  return (    
    <div id='App' style={{ backgroundImage: `url(${homeBackground})`,backgroundSize: 'cover' }}>
      <CartProvider>
     <BrowserRouter> 
      {/* inserts tha navbar that will be displayed on all pages */}
          <NavBar total={total}/>
          {/* Creats Routes to each page linking to each component */}
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/Shop" element={<Shop food={food} coffeeAndTea={coffeeAndTea} localBeer={localBeer} />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/CheckOut" element={<CheckOut total={total}/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
