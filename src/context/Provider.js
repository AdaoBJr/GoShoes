import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import store, { PRODUCTS } from './store';
import productsReducer from './reducers/products';

export default function Provider({ children }) {
  const [products, setProducts] = useReducer(productsReducer, PRODUCTS);

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  // CONTEXT
  const contextValue = {
    products,
    setProducts,
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
