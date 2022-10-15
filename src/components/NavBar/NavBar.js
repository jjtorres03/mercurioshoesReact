import CartWidget from '../CartWidget/CartWidget';
import img from '../../../src/logo.jpeg';
import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'


export const NavBar = () => {
    return (


        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-1'>
                <Link to={'/'} className="nav-link"><img className='logo' src={img} alt='logo' /></Link>
            </div>

            <div className='col-md-10 nav-content'>
                <ul className="nav">
                    <Link to={'/'} className='nav-link'>INICIO</Link>
                    <Link to={'/products'} className='nav-link'>PRODUCTOS</Link>
                    <div className="dropdown">
                        <div className="nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            CATEGORIAS
                        </div>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/category/adidas">Adidas</Link></li>
                            <li><Link className="dropdown-item" to="/category/nike">Nike</Link></li>
                            <li><Link className="dropdown-item" to="/category/jordan">Jordan</Link></li>
                        </ul>
                    </div>
                    <Link to={'/contact'} className='nav-link'>CONTACTO</Link>
                </ul>
            </div>

            <div className='col-md-1'>
                <div className='menuCarrito'>
                    <Link to={'/cart'} className="nav-link icon"><CartWidget /></Link>
                </div>
            </div>

            </div>
        </div>

    )
}

export default NavBar;