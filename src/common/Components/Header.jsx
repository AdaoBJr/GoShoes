import React from 'react';
import { Link } from 'react-router-dom';

import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import Favoritos from '../Pages/Favoritos';

export default function Header() {
  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href className="nav__logo">Christmas Gift</a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
              <li className="nav__item"><Link to={Favoritos} className="nav__link">Favoritos</Link></li>
              <li className="nav__item"><a href="#decoration" className="nav__link">Decorations</a></li>
              <li className="nav__item"><a href="#accessory" className="nav__link">Accessory</a></li>

              <li className="change-theme" id="theme-button"><BiToggleLeft /></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <BiToggleRight />
          </div>
        </nav>
      </header>
    </>
  );
}
