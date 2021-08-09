import React, { useContext, useEffect } from 'react';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';

import store, { addCart, addProducts, setFav } from '../../context/store';
import { Fav, CarT, showQty } from '../../functions';
import { CALÇADOS, fetchAPI } from '../../services';

export default function Shoes() {
  const {
    products: { products, favorited }, cart: { cart }, setProducts, setCart,
  } = useContext(store);

  const threeWordsTitle = (title) => {
    const newName = `${title.split(' ')[0]} ${title.split(' ')[1]} ${title.split(' ')[2]}`;
    return newName;
  };

  const renderProducts = (Products) => (
    <section className="shoes section bdContainer" id="shoes">
      <h2 className="sectionTitle">
        Calçados e Acessórios
      </h2>

      <h2 className="collectionTitle">
        Novas Coleções
      </h2>
      <div className="shoesContainer bdGrid">
        {Products.map((product) => {
          const {
            id, title, thumbnail, available_quantity: availableQty, price,
          } = product;
          const Qty = showQty(id, cart);

          return (
            <div className="shoesContent" key={id}>
              <img src={thumbnail} alt="" className="shoesImg" />
              <h3 className="shoesTitle">{threeWordsTitle(title)}</h3>
              <span className="shoesCategory">
                {(availableQty) === 1 ? `${availableQty} disponível` : (
                  `${availableQty} disponíveis`)}
              </span>
              <span className="shoesPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveButtons">
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'removeButton' : 'opacity'}
                  onClick={() => setCart(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'cartItems' : 'cartItemsNum1'}
                  onClick={() => setCart(addCart(CarT(product, cart, true)))}
                >
                  <FaShoppingCart />
                  <div className="numberItems">{ Qty }</div>
                </div>
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'addButton' : 'opacity'}
                  onClick={() => setCart(addCart(CarT(product, cart, true)))}
                >
                  <FaPlus />
                </div>
              </div>
              <div
                aria-hidden
                className="button favoritedButton"
                onClick={() => setProducts(setFav(Fav(product, favorited)))}
              >
                {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  const getProducts = async () => {
    const response = await fetchAPI(CALÇADOS);
    const allProducts = response.results;
    const randomProducts = Math.random() * 100;
    const numberCards = 9;
    const cardsLimit = randomProducts + numberCards;
    const excludedProduct = 'kit';

    const productsFiltered = allProducts.filter((product) => (
      !product.title.toLowerCase().includes(excludedProduct)));

    let cardsInitial = 0;
    if (cardsLimit < productsFiltered.length) {
      cardsInitial = cardsLimit - numberCards;
    } else {
      cardsInitial = productsFiltered.length - numberCards;
    }

    const newProducts = productsFiltered.slice(cardsInitial, cardsLimit);
    setProducts(addProducts(response.results, newProducts));
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(getProducts, []);

  // ----------------------------------------------------------------------------------------------

  return (
    renderProducts(products)
  );
}
