import React from 'react';
import './Navbar.css';

import Logo from '../../Assets/Varnaka Logo T Rudas.png';
import Search from '../../Assets/Search Logo.svg';

const Navbar = () => {
  return(
    <nav className="flex justify-between items-center ph5 v-mid">
      <div className="flex items-center">
        <img src={Logo} alt="Varnaka" className="ph2"/>
        <span className="ph2">CATEGORY</span>
        <span className="ph2">CATEGORY</span>
        <span className="ph2">CATEGORY</span>
        <span className="shop">SHOP</span>
      </div>
      <div className="w-25 flex items-center justify-end">
        <span className="search pa2 flex">
          <span className="searchBox ph2 w5">Search</span>
          <img src={Search} alt="Search"/>
          </span>
        <span className="ph2">LT</span>
        <span className="ph2"><b>ENG</b></span>
      </div>
    </nav>
  )
}

export default Navbar;