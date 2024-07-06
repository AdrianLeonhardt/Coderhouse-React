import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={logo} alt="Moldes Digitales" />
        </div>
        <ul className="navbar-links">
            <li className="navbar-items">
                <a href="#">Inicio</a>
            </li>
            <li className="navbar-items">
                <a href="#">Servicios</a>
            </li>
            <li className="navbar-items">
                <a href="#">Productos</a>
            </li>
            <li className="navbar-items">
                <a href="#">Contacto</a>
            </li>
        </ul>

        <CartWidget/>
    </nav>
  )
}

export default Navbar