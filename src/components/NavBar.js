import '../style/NavBar.css';
import '../style/all.css';
import CartContext from './cartContext'
import { useContext } from "react"
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping, faTruckFast, faTruck )

function NavBar(props) {


  const shoppingCart = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />;
  // const truck = <FontAwesomeIcon icon="fa-solid fa-truck-fast" />;
  const truck = <FontAwesomeIcon id='truck' icon="fa-solid fa-truck" />

  const { items } = useContext(CartContext);

  

  return (
    <div>
      <div id='logoContainer'>
        <div id='logoMain'>Cafe Bonat's </div> 
       <div id='subLogoContainer'>         
        <div id='truckContainer'>
          <div id='fastWindContainer'>
            <div id='windOne'></div>
            <div id='windTwo'></div>
            <div id='windThree'>            
          </div>
          </div>
            {truck}
          </div>
        <div id='subLogo'>Breezin' Bayou</div></div>
      </div>

      <nav id="NavBar">        
        <div id='pages'>
          <Link id="homeNav" to="/">Home</Link>
          <Link id="shopNav" to="Shop">Shop</Link>
          <Link id="aboutNav" to="ContactUs">Contact</Link>
        </div>
        <div id='checkOutCart' > <Link to='CheckOut'>{shoppingCart}</Link>{items.length}</div>    
      </nav>
    </div>
  );
}

export default NavBar;
