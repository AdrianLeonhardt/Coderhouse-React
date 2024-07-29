import CartWidget from "./CartWidget"
import "../../App.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
      <nav className="navbar">
          <div>
                <Link to="/">
                    <img className="logo" src="img/logo.png" alt="Logo de Moldes Digitales" />
                </Link>
            </div>
          <ul className="navbar-links">
              <li><Link className="navbar-items" to = "/category/pantalones">Pantalones</Link></li>
              <li><Link className="navbar-items" to = "/category/shorts">Shorts</Link></li>
              <li><Link className="navbar-items" to = "/category/camisas">Camisas</Link></li>
          </ul>
        
          <CartWidget/>
      </nav>
    )
  }
  
  export default Navbar