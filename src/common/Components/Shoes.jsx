import React from 'react';
import { /* FaHeart, */ FaRegHeart } from 'react-icons/fa';

export default function Shoes() {
  return (
    <>
      {/* <!--========== COLEÇÕES ==========--> */}
      <section className="shoes section bdContainer" id="shoes">
        <h2 className="sectionTitle">
          New Christmas
          {' '}
          <br />
          {' '}
          Accessories
        </h2>

        <div className="shoesContainer bdGrid">
          <div className="shoesContent">
            <img src="assets/img/shoes1.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Snow Globe</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$9.45</span>
            <FaRegHeart className="button shoesButton" />
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes2.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Candy</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$2.52</span>
            <FaRegHeart className="button shoesButton" />
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes3.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Angel</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$13.15</span>
            <FaRegHeart className="button shoesButton" />
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes4.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Sphere</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$4.25</span>
            <FaRegHeart className="button shoesButton" />
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes5.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Surprise gift</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$7.99</span>
            <FaRegHeart className="button shoesButton" />
          </div>
        </div>
      </section>
    </>
  );
}
