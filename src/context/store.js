// store = Context API
import { createContext } from 'react';

// INITIAL STATES ----------------------------------------------------------------
export const USER = {
  email: '',
  password: '',
};

export const PRODUCTS = {
  fetchOn: true,
  loading: undefined,
  done: undefined,
  allProducts: [],
  products: [],
};

export const CART = {
  cart: [],
};

// COMBINE -----------------------------------------------------------------------

export const INITIAL_STATE = { ...USER, ...PRODUCTS, ...CART };

const store = createContext(INITIAL_STATE);

export default store;

// ACTIONS -----------------------------------------------------------------------

// USER
export const ADD_PRODUCTS = 'ADD_PRODUCTS'; // ACTION -> ADD_PRODUCTS
export const addProducts = (allProducts, products) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_PRODUCTS, payload: { allProducts, products },
});
