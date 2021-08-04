import React from 'react';
import { Link } from 'react-router-dom';

import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import Favoritos from '../Pages/Favorited';

export default function Header() {
  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header className="header" id="header">
        <nav className="nav bdContainer">
          <a href className="navLogo">Christmas Gift</a>

          <div className="navMenu" id="nav-menu">
            <ul className="navList">
              <li className="navItem"><a href="#home" className="navLink activeLink">Home</a></li>
              <li className="navItem"><Link to={Favoritos} className="navLink">Favoritos</Link></li>
              <li className="navItem"><a href="#decoration" className="navLink">Decorations</a></li>
              <li className="navItem"><a href="#accessory" className="navLink">Accessory</a></li>

              <li className="changeTheme" id="theme-button"><BiToggleLeft /></li>
            </ul>
          </div>

          <div className="navToggle" id="nav-toggle">
            <BiToggleRight />
          </div>
        </nav>
      </header>
    </>
  );
}
