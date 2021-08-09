import React, { useContext } from 'react';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { TiCancel } from 'react-icons/ti';

import store from '../../context/store';

export default function CartFooter() {
  const { products: { totalCart } } = useContext(store);

  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <footer className="footerNav footerCart">
        <button
          type="button"
          className="trashCancelBtn"
        >
          <FaTrash className="clearIcon" />
          Limpar Carrinho
        </button>
        <button
          type="button"
          className="trashCancelBtn"
        >
          <TiCancel className="cancelIcon" />
          Cancelar Compra
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
