import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import store, { CART, findHome, PRODUCTS } from './store';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';

export default function Provider({ children }) {
  const { pathname } = useLocation();
  const [products, setProducts] = useReducer(productsReducer, PRODUCTS);
  const [cart, setCart] = useReducer(cartReducer, CART);

  // HOME ------------------------------------------------------------------------------------------
  const findLocation = () => {
    if (pathname !== ('/')) { setProducts(findHome(false)); }
    if (pathname === ('/')) { setProducts(findHome(true)); }
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(findLocation, [pathname]);

  // CONTEXT
  const contextValue = {
    products,
    cart,
    setProducts,
    setCart,
  };

  // ----------------------------------------------------------------------------------------------

  return (
    <store.Provider value={contextValue}>
      { children }
    </store.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
