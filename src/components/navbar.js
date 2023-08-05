import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to='/' className='shopLink'> Shop </Link>
            <Link to="/cart" className='cartLink' >
                <ShoppingCart size={32}     />
            </Link>
        </div>
    </div>
  )
}
