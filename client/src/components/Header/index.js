import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div className = "d-flex mb-3 border-bottom border-warning">
        <Link className='me-auto fs-1' to="/"><h1 className='px-5 pt-3'>CNR Developers</h1></Link>
        <ul className="nav justify-content-end fs-4 p-2 pe-4">
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
  )
}

export default Header