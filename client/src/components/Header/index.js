import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div id='header'>
        <div>
        <Link className='fs-1' to="/"><h1>CNR Developers</h1></Link>
        <ul className="nav justify-content-end fs-4">
          <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/ourwork">Our Work</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
          </li>

        </ul>
        </div> 

    </div>
  )
}

export default Header