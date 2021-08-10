import React, { useContext, useState } from 'react';
import ALink from 'react-anchor-link-smooth-scroll';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav, showQty } from '../../functions';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Favorited() {
  const [ScrollY, setScrollY] = useState(false);
  const {
    products: { favorited }, cart: { cart }, setProducts, setCart,
  } = useContext(store);

  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  // ---------------------------------------------------------------------------------------------

  const renderProducts = () => (
    <section className="section bdContainer" id="fav">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#fav" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <h2 className="sectionTitle">
        Favoritos
      </h2>

      <div className="favContainer bdGrid">
        {favorited.map((product) => {
          const {
            id, title, thumbnail, availableQuantity, price,
          } = product;
          const Qty = showQty(id, cart);

          return (
            <div className="favContent" key={id}>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="favTitle">{title}</h3>
              <span className="favCategory">
                {(availableQuantity) === 1 ? `${availableQuantity} disponível` : (
                  `${availableQuantity} disponíveis`)}
              </span>
              <span className="favPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveButtons">
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'removeButton' : 'opacity'}
                  onClick={() => setCart(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'cartItems' : 'cartItemsNum1'}
                  onClick={() => setCart(addCart(CarT(product, cart, true)))}
                >
                  <FaShoppingCart />
                  <div className="numberItems">{ Qty }</div>
                </div>
                <div
                  aria-hidden
                  className="addButton"
                  onClick={() => setCart(addCart(CarT(product, cart, true)))}
                >
                  <FaPlus />
                </div>
              </div>
              <div
                aria-hidden
                className="button favoritedButton"
                onClick={() => setProducts(setFav(Fav(product, favorited)))}
              >
                {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
  if (!favorited.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens favoritos</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
      <Footer />
    </>
  );
}
