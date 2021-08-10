import React, { useContext, useState } from 'react';
import ALink from 'react-anchor-link-smooth-scroll';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaTimes,
} from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import store, { addCart, setFav } from '../../context/store';
import {
  CarT, Fav, removeItem,
} from '../../functions';

import CartFooter from '../Components/CartFooter';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Cart() {
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
    <section className="section bdContainer" id="cart">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#cart" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'} style={{ bottom: '5rem' }}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <h2 className="sectionTitle">
        Carrinho de Compras
      </h2>

      <div className="cartContainer bdGrid">
        {cart.map((product) => {
          const {
            id, title, thumbnail, availableQuantity, count, totalValue,
          } = product;

          return (
            <div className="cartContent" key={id}>
              <div
                aria-hidden
                className="button removedButton"
                onClick={() => setCart(addCart(removeItem(id, cart)))}
              >
                <FaTimes />
              </div>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="cartTitle">{title}</h3>
              <span className="cartCategory">
                {(availableQuantity) === 1 ? `${availableQuantity} disponível` : (
                  `${availableQuantity} disponíveis`)}
              </span>
              <span className="cartPreci">
                {`R$ ${totalValue
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveBtns">
                <div
                  aria-hidden
                  className={(count > 1) ? 'removeButton' : 'opacity'}
                  onClick={() => setCart(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div className={(count > 1) ? 'cartItems' : 'cartItemsNum1'}>
                  <div className="numberItems cartQty">{ count }</div>
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
  if (!cart.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens no carrinho</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
      <CartFooter />
      <Footer />
    </>
  );
}
