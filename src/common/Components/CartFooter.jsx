import React, { useContext } from 'react';

import store from '../../context/store';

export default function CartFooter() {
  const { products: { totalCart } } = useContext(store);

  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <footer className="footerNav footerCart">
        <div className="buttonsCart">
          <button
            type="button"
            // onClick={}
          >
            Limpar Carrinho
          </button>
          <button
            type="button"
            // onClick={}
          >
            Cancelar Compra
          </button>
        </div>
        <div className="totalCart">
          <h3>{`Total: R$ ${totalCart}`}</h3>
        </div>
        <button
          type="button"
        >
          Comprar
        </button>
      </footer>
    </>
  );
}
