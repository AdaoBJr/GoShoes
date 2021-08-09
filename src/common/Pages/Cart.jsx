import React, { useContext } from 'react';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus,
} from 'react-icons/fa';
import store, { addCart, setFav } from '../../context/store';
import { CarT, Fav, showQty } from '../../functions';
import Header from '../Components/Header';

export default function Cart() {
  const { products: { favorited, cart }, setProducts } = useContext(store);
  const renderProducts = () => (
    <section className="section bdContainer">
      <h2 className="sectionTitle">
        Carrinho de Compras
      </h2>

      <div className="cartContainer bdGrid">
        {cart.map((product) => {
          const {
            id, title, thumbnail, availableQuantity, price,
          } = product;
          return (
            <div className="cartContent" key={id}>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="cartTitle">{title}</h3>
              <span className="cartCategory">
                {`Disponível: ${availableQuantity} und(s)`}
              </span>
              <span className="cartPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveBtns">
                <div
                  aria-hidden
                  className="removeButton"
                  onClick={() => setProducts(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div className="cartItems">
                  <div className="numberItems cartQty">{ showQty(id, cart) }</div>
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
  if (!cart.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens no carrinho</h1>
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
