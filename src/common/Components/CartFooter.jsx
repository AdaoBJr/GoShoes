import React, { useContext, useEffect, useState } from 'react';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { TiCancel } from 'react-icons/ti';

import store from '../../context/store';

export default function CartFooter() {
  const { products: { totalCart } } = useContext(store);
  const [minWidth, setMinWidth] = useState(false);

  const checkWidthScreen = () => {
    const MIN_WIDTH = 768;
    const screenWidth = window.innerWidth;

    if (screenWidth >= MIN_WIDTH) {
      setMinWidth(true);
    } else {
      setMinWidth(false);
    }
  };

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(checkWidthScreen, []);
  window.addEventListener('resize', () => checkWidthScreen());

  // ---------------------------------------------------------------------------------------------

  return (
    <>
      {/* <!--========== FOOTERCART ==========--> */}
      <footer className="footerNav footerCart">
        <button
          type="button"
          className="trashCancelBtn"
        >
          <FaTrash className="clearIcon" />
          {(minWidth) ? 'Limpar Carrinho' : 'Limpar'}
        </button>
        <button
          type="button"
          className="trashCancelBtn"
        >
          <TiCancel className="cancelIcon" />
          {(minWidth) ? 'Cancelar Compra' : 'Cancelar'}
        </button>
        <div className="totalCart">
          <h3>
            {`Total: R$ ${totalCart
              .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
          </h3>
        </div>
        <button
          type="button"
          className="shopBtn"
        >
          <FaShoppingBag className="shopIcon" />
          Comprar
        </button>
      </footer>
    </>
  );
}
