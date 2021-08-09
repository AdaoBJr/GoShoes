import {
  ADD_CART, UPDATE_SUM, ADD_TOTAL_CART,
} from '../store';

const cartReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_CART: {
      const { cart } = payload;
      return {
        ...state,
        cart,
      };
    }
    case UPDATE_SUM: {
      const { updateSum } = payload;
      return {
        ...state,
        updateSum,
      };
    }
    case ADD_TOTAL_CART: {
      const { totalCart } = payload;
      return {
        ...state,
        totalCart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
