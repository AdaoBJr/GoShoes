import React, { useContext } from 'react';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import store, { addCart, setFav } from '../../context/store';
import { Cart, Fav, showQty } from '../../functions';
import Header from '../Components/Header';

export default function Favorited() {
  const { products: { favorited, cart }, setProducts } = useContext(store);
  const renderProducts = () => (
    <section className="shoes section bdContainer" id="shoes">
      <h2 className="sectionTitle">
        Favoritos
      </h2>

      <div className="shoesContainer bdGrid">
        {favorited.map((product) => {
          const {
            id, title, thumbnail, available_quantity: availableQty, price,
          } = product;
          return (
            <div className="shoesContent" key={id}>
              <img src={thumbnail} alt="" className="shoesImg" />
              <h3 className="shoesTitle">{title}</h3>
              <span className="shoesCategory">
                {`Disponível: ${availableQty} und(s)`}
              </span>
              <span className="shoesPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveButtons">
                <div
                  aria-hidden
                  className="removeButton"
                  onClick={() => setProducts(addCart(Cart(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div className="cartItems">
                  <FaShoppingCart />
                  <div className="numberItems">{ showQty(id, cart) }</div>
                </div>
                <div
                  aria-hidden
                  className="addButton"
                  onClick={() => setProducts(addCart(Cart(product, cart, true)))}
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
  if (!favorited.length) { <h1>Não temos favoritos</h1>; }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
    </>
  );
}
