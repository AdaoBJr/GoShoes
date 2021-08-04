import React from 'react';

export default function Shoes() {
  return (
    <>
      {/* <!--========== COLEÇÕES ==========--> */}
      <section className="accessory section bd-container" id="accessory">
        <h2 className="section-title">
          New Christmas
          {' '}
          <br />
          {' '}
          Accessories
        </h2>

        <div className="accessory__container bd-grid">
          <div className="accessory__content">
            <img src="assets/img/accessory1.png" alt="" className="accessory__img" />
            <h3 className="accessory__title">Snow Globe</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$9.45</span>
            <a href className="button accessory__button"><i className="bx bx-heart" /></a>
          </div>

          <div className="accessory__content">
            <img src="assets/img/accessory2.png" alt="" className="accessory__img" />
            <h3 className="accessory__title">Candy</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$2.52</span>
            <a href className="button accessory__button"><i className="bx bx-heart" /></a>
          </div>

          <div className="accessory__content">
            <img src="assets/img/accessory3.png" alt="" className="accessory__img" />
            <h3 className="accessory__title">Angel</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$13.15</span>
            <a href className="button accessory__button"><i className="bx bx-heart" /></a>
          </div>

          <div className="accessory__content">
            <img src="assets/img/accessory4.png" alt="" className="accessory__img" />
            <h3 className="accessory__title">Sphere</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$4.25</span>
            <a href="#" className="button accessory__button"><i className="bx bx-heart" /></a>
          </div>

          <div className="accessory__content">
            <img src="assets/img/accessory5.png" alt="" className="accessory__img" />
            <h3 className="accessory__title">Surprise gift</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$7.99</span>
            <a href className="button accessory__button"><i className="bx bx-heart" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
