import { ADD_PRODUCTS } from '../store';

const productsReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCTS: {
      const { products } = payload;
      return {
        ...state,
        products,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
