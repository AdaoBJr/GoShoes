// SET / GET LOCALSTORAGE
export const setStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

// SET FAVORITOS
export const Fav = (product, favorited) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity,
  } = product;
  const favorite = [...favorited];

  const findFav = favorite.find((item) => item.id === id);
  if (!favorite.length || !findFav) {
    const newFav = [...favorite, {
      id, title, thumbnail, price, availableQuantity,
    }];
    setStorage('LSfav', newFav);
    return newFav;
  }
  const newFav = favorited.filter((fav) => fav.id !== id);
  setStorage('LSfav', newFav);
  return newFav;
};

// CARRINHO DE COMPRAS
export const Cart = (product, cart, add) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const productCart = [...cart, {
      id, title, thumbnail, price, availableQuantity, count: 1, totalValue: price,
    }];
    setStorage('LScart', productCart);
    return productCart;
  }
  const productCart = [...cart];
  const key = productCart.indexOf(findProduct);

  if (add) { productCart[key].count += 1; }
  if (!add && productCart[key].count >= 1) { productCart[key].count -= 1; }

  productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
  setStorage('LScart', productCart);
  return productCart;
};
