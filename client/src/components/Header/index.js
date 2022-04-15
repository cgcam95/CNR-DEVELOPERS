import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header'>
        <nav>
        <Link to="/"><h1>CNR Developers</h1></Link>
        <Link to="/">Home</Link>
        
        </nav> 

    </div>
  )
}

export default Header