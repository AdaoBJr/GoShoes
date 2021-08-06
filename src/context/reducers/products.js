import { ADD_PRODUCTS } from '../store';

const productsReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCTS: {
      const { allProducts, products } = payload;
      return {
        ...state,
        allProducts,
        products,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
