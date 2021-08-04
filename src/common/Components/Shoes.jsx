import React from 'react';

export default function Shoes() {
  return (
    <>
      {/* <!--========== COLEÇÕES ==========--> */}
      <section className="shoes section bdContainer" id="shoes">
        <h2 className="section-title">
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
            <a href className="button shoesButton"><i className="bx bx-heart" /></a>
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes2.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Candy</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$2.52</span>
            <a href className="button shoesButton"><i className="bx bx-heart" /></a>
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes3.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Angel</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$13.15</span>
            <a href className="button shoesButton"><i className="bx bx-heart" /></a>
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes4.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Sphere</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$4.25</span>
            <a href="#" className="button shoesButton"><i className="bx bx-heart" /></a>
          </div>

          <div className="shoesContent">
            <img src="assets/img/shoes5.png" alt="" className="shoesImg" />
            <h3 className="shoesTitle">Surprise gift</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$7.99</span>
            <a href className="button shoesButton"><i className="bx bx-heart" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
