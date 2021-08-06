import React, { useContext, useEffect, useState } from 'react';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';

import store, { addProducts } from '../../context/store';
import img6 from '../../images/img6.png';
import { CALÇADOS, fetchAPI } from '../../services';

export default function Shoes() {
  const { /* products: { products }, */ setProducts } = useContext(store);
  const [fullHeart, setHeart] = useState(false);

  const renderProducts = () => (
    <section className="shoes section bdContainer" id="shoes">
      <h2 className="sectionTitle">
        Calçados e Acessórios
      </h2>

      <h2 className="collectionTitle">
        Novas Coleções
      </h2>

      <div className="shoesContainer bdGrid">
        <div className="shoesContent">
          <img src={img6} alt="" className="shoesImg" />
          <h3 className="shoesTitle">Candy</h3>
          <span className="shoesCategory">shoes</span>
          <span className="shoesPreci">$2.52</span>
          <div className="addRemoveButtons">
            <div
              aria-hidden
              className="removeButton"
            >
              <FaMinus />
            </div>
            <div className="cartItems">
              <FaShoppingCart />
              <div className="numberItems">3</div>
            </div>
            <div
              aria-hidden
              className="addButton"
            >
              <FaPlus />
            </div>
          </div>
          <div
            aria-hidden
            className="button favoritedButton"
            onClick={() => setHeart(!fullHeart)}
          >
            {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
          </div>
        </div>
      </div>
    </section>
  );

  const getProducts = async () => {
    const response = await fetchAPI(CALÇADOS);
    const allProducts = response.results;
    const randomProducts = Math.random() * 100;
    const numberCards = 10;
    const cardsLimit = randomProducts + numberCards;

    let cardsInitial = 0;
    if (cardsLimit < allProducts.length) {
      cardsInitial = cardsLimit - numberCards;
    } else {
      cardsInitial = allProducts.length - numberCards;
    }

    const newProducts = response.results.slice(cardsInitial, cardsLimit);
    setProducts(addProducts(response.results, newProducts));
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(getProducts, []);

  // ----------------------------------------------------------------------------------------------

  return (
    renderProducts()
  );
}
