import React, { useContext } from 'react';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav, showQty } from '../../functions';
import Header from '../Components/Header';

export default function Favorited() {
  const { products: { favorited, cart }, setProducts } = useContext(store);
  const renderProducts = () => (
    <section className="section bdContainer">
      <h2 className="sectionTitle">
        Favoritos
      </h2>

      <div className="favContainer bdGrid">
        {favorited.map((product) => {
          const {
            id, title, thumbnail, availableQuantity, price,
          } = product;
          const Qty = showQty(id, cart);

          return (
            <div className="favContent" key={id}>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="favTitle">{title}</h3>
              <span className="favCategory">
                {`Disponível: ${availableQuantity} und(s)`}
              </span>
              <span className="favPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveButtons">
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'removeButton' : 'opacity'}
                  onClick={() => setProducts(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'cartItems' : 'cartItemsNum1'}
                  onClick={() => setProducts(addCart(CarT(product, cart, true)))}
                >
                  <FaShoppingCart />
                  <div className="numberItems">{ Qty }</div>
                </div>
                <div
                  aria-hidden
                  className="addButton"
                  onClick={() => setProducts(addCart(CarT(product, cart, true)))}
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
  if (!favorited.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens favoritos</h1>
      </>
    );
  }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
    </>
  );
}
