import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import { HiSun } from 'react-icons/hi';
import { RiMoonClearFill } from 'react-icons/ri';
import store from '../../context/store';
import { showQty } from '../../functions';

export default function Header() {
  const { products: { itsHome }, cart: { cart } } = useContext(store);
  const [showMenu, setShowMenu] = useState(false);
  const [lightTheme, setTheme] = useState(true);
  const Qty = showQty(false, cart);

  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header className="header" id="header">
        <nav className="nav bdContainer">
          <Link to="/" className="navLogo">GoShoes</Link>

          <div className={(showMenu) ? 'navMenu show' : 'navMenu'} id="nav-menu">
            <ul className="navList">
              <li
                className="navItem"
                onClick={() => setShowMenu(!showMenu)}
                aria-hidden
              >
                <Link to="/" className="navLink activeLink">Home</Link>
              </li>
              <li
                className="navItem"
                onClick={() => { setShowMenu(!showMenu); }}
                aria-hidden
              >
                {(itsHome) ? (<ALink href="#shoes" className="navLink">Coleções</ALink>) : (
                  <Link to="/" className="navLink">Coleções</Link>
                )}
              </li>
              <li
                className="navItem"
                onClick={() => setShowMenu(!showMenu)}
                aria-hidden
              >
                <Link to="/favoritos" className="navLink">Favoritos</Link>
              </li>
              <li
                className="navItem"
                onClick={() => setShowMenu(!showMenu)}
                aria-hidden
              >
                <Link to="/carrinho" className="navLink display">
                  Carrinho
                  {(Qty !== 0) && (
                  <div className={(Qty === 0) ? 'numCount' : 'numCount showNumCount'}>
                    {Qty}
                  </div>
                  )}
                </Link>
              </li>

              <li
                className="changeTheme"
                id="theme-button"
                aria-hidden
                onClick={() => setTheme(!lightTheme)}
              >
                { (lightTheme) ? (
                  <span>
                    <BiToggleLeft style={{ cursor: 'pointer' }} />
                    <HiSun style={{ fontSize: '1.5rem' }} />
                  </span>
                ) : (
                  <span>
                    <BiToggleRight style={{ cursor: 'pointer' }} />
                    <RiMoonClearFill style={{ fontSize: '1.5rem' }} />
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div
            aria-hidden
            onClick={() => setShowMenu(!showMenu)}
            className={(showMenu) ? 'icon iconActive' : 'icon'}
          >
            <div className="hamburguer" />
          </div>
        </nav>
      </header>
    </>
  );
}
