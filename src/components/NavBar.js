import '../style/NavBar.css';
import '../style/all.css';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping)

function NavBar() {


  const shoppingCart = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />


  return (
    <div>
      <nav id="NavBar">
        <div id='pages'>
          <Link id="homeNav" to="/">Home</Link>
          <Link id="shopNav" to="Shop">Shop</Link>
          <Link id="aboutNav" to="About">About Us</Link>
        </div>
        <Link id='checkOutCart' to='CheckOut'>{shoppingCart}</Link>
        
        
      </nav>
    </div>
  );
}

export default NavBar;
