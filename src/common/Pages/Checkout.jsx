import React, { useContext, useState } from 'react';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiUpArrowAlt } from 'react-icons/bi';
import store, { } from '../../context/store';
import { showQty } from '../../functions';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Checkout() {
  const [ScrollY, setScrollY] = useState(false);
  const {
    cart: { cart, totalCart },
  } = useContext(store);

  const Qty = showQty(false, cart);
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
        Compra Concluída com Sucesso🎉🎉🎉
      </h2>
      <p className="shoesCategory">
        {(Qty) === 1 ? `${Qty} item comprado` : (
          `${Qty} itens comprados`)}
        {`Valor: R$ ${totalCart
          .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
      </p>

      <div className="favContainer bdGrid">
        <div />
      </div>
    </section>
  );
  // if (!favorited.length) {
  //   return (
  //     <>
  //       <Header />
  //       <h1 className="sectionTitle">Não temos itens favoritos</h1>
  //       <Footer />
  //     </>
  //   );
  // }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
      <Footer />
    </>
  );
}
