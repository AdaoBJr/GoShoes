import React from 'react';
import { Link } from 'react-router-dom';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';

export default function Header() {
  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header className="header" id="header">
        <nav className="nav bdContainer">
          <a href className="navLogo">Christmas Gift</a>

          <div className="navMenu" id="nav-menu">
            <ul className="navList">
              <li className="navItem"><Link to="/" className="navLink activeLink">Home</Link></li>
              <li className="navItem"><ALink href="#shoes" className="navLink">Coleções</ALink></li>
              <li className="navItem"><Link to="/favoritos" className="navLink">Favoritos</Link></li>
              <li className="navItem"><Link to="/carrinho" className="navLink">Carrinho</Link></li>

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
