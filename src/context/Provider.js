import React, { useEffect, useReducer, useState } from 'react';
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
  const [lightTheme, setTheme] = useState(true);

  // HOME ------------------------------------------------------------------------------------------
  const findLocation = () => {
    if (pathname === ('/favoritos')) { setScreen({ type: SET_SCREEN_FAV }); }
    if (pathname === ('/carrinho')) { setScreen({ type: SET_SCREEN_CART }); }
    if (pathname === ('/')) { setScreen({ type: SET_SCREEN_HOME }); }
  };

  /*= =================== DARK LIGHT THEME ==================== */
  useEffect(() => {
    if (!lightTheme) document.body.classList.add('darkTheme');
    if (lightTheme) document.body.classList.remove('darkTheme');
  });

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(findLocation, [pathname]);

  // CONTEXT
  const contextValue = {
    products,
    screen,
    cart,
    lightTheme,
    setProducts,
    setScreen,
    setCart,
    setTheme,
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
