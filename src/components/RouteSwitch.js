import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import NavBar from "./NavBar"

const RouteSwitch = () => {
  return (
    <BrowserRouter> 
    {/* inserts tha navbar that will be displayed on all pages */}
        <NavBar />
        {/* Creats Routes to each page linking to each component */}
        <Routes>
            <Route path="/Home" element={<Home />} /> 
            <Route path="/Shop" element={<Shop />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;