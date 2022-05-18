import '../style/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav id="NavBar">
        <Link id="homeNav" to="/">Home</Link> |{" "}
        <Link to="Shop">Shop</Link>
      </nav>
    </div>
  );
}

export default NavBar;
