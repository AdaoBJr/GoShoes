import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import store, {
  CART, PRODUCTS, SCREEN, SET_SCREEN_CART, SET_SCREEN_FAV, SET_SCREEN_HOME,
} from './store';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import screenReducer from './reducers/screen';

export default function Provider({ children }) {
  const { pathname } = useLocation();
  const [products, setProducts] = useReducer(productsReducer, PRODUCTS);
  const [screen, setScreen] = useReducer(screenReducer, SCREEN);
  const [cart, setCart] = useReducer(cartReducer, CART);

  // HOME ------------------------------------------------------------------------------------------
  const findLocation = () => {
    if (pathname === ('/favoritos')) { setScreen({ type: SET_SCREEN_FAV }); }
    if (pathname === ('/carrinho')) { setScreen({ type: SET_SCREEN_CART }); }
    if (pathname === ('/')) { setScreen({ type: SET_SCREEN_HOME }); }
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(findLocation, [pathname]);

  // CONTEXT
  const contextValue = {
    products,
    screen,
    cart,
    setProducts,
    setScreen,
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
