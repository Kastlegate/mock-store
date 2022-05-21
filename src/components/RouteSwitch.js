import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import CheckOut from'./CheckOut'
import About from'./About'
import NavBar from "./NavBar"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCartShopping)

const RouteSwitch = () => {
  return (
    <BrowserRouter> 
    {/* inserts tha navbar that will be displayed on all pages */}
        <NavBar />
        {/* Creats Routes to each page linking to each component */}
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;