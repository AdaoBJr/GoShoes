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
  itsHome: true,
  allProducts: [],
  products: [],
  favorited: [],
};

export const CART = {
  cart: [],
  updateSum: true,
  totalCart: 0,
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

export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (favorited) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { favorited },
});

export const SET_LOCATION = 'SET_LOCATION'; // ACTION -> SET_LOCATION
export const findHome = (itsHome) => ({ // ACTION-CREATOR -> SET_LOCATION
  type: SET_LOCATION, payload: { itsHome },
});

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});

export const UPDATE_SUM = 'UPDATE_SUM'; // ACTION -> UPDATE_SUM
export const uptSum = (updateSum) => ({ // ACTION-CREATOR -> UPDATE_SUM
  type: UPDATE_SUM, payload: { updateSum },
});

export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'; // ACTION -> ADD_TOTAL_CART
export const addTotalCart = (totalCart) => ({ // ACTION-CREATOR -> ADD_TOTAL_CART
  type: ADD_TOTAL_CART, payload: { totalCart },
});
