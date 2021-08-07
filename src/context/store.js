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
  cart: [],
  favorited: [],
};

// COMBINE -----------------------------------------------------------------------

export const INITIAL_STATE = { ...USER, ...PRODUCTS };

const store = createContext(INITIAL_STATE);

export default store;

// ACTIONS -----------------------------------------------------------------------

// USER
export const ADD_PRODUCTS = 'ADD_PRODUCTS'; // ACTION -> ADD_PRODUCTS
export const addProducts = (allProducts, products) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_PRODUCTS, payload: { allProducts, products },
});

export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (favorited) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { favorited },
});

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});
