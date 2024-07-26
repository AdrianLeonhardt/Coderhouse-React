import CartWidget from "./CartWidget"
import {Link, Outlet} from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div>
                <img className="logo" src=".img/logo" alt="Logo de Moldes Digitales" />
            </div>
            <ul className="navbar-links">
                <Link to = {"/"} className="navbar-items">Inicio</Link>
                <Link to = {"servicios"} className="navbar-items">Servicios</Link>
                <Link to = {"productos"} className="navbar-items">Productos</Link>
                <Link to = {"contacto"} className="navbar-items">Contacto</Link>
            </ul>
            <CartWidget/>
        </nav>
    <Outlet/>
    </>
  )
}

export default Navbar