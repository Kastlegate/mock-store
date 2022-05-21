import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import CheckOut from'./components/CheckOut'
import About from'./components/About'
import NavBar from "./components/NavBar"
import { useState } from "react";

function App() {
  // shopping cart array to hold objects being bought
  const [shoppingCart, setShoppingCart] = useState([])
  const [total, setTotal] = useState(0);

  return (
    
    <BrowserRouter> 
    {/* inserts tha navbar that will be displayed on all pages */}
        <NavBar total={total}/>
        {/* Creats Routes to each page linking to each component */}
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Shop" element={<Shop setTotal={setTotal}/>} />
            <Route path="/About" element={<About />} />
            <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
