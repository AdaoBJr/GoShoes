import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import img6 from '../../images/img6.png';

export default function Shoes() {
  const [fullHeart, setHeart] = useState(false);
  return (
    <>
      {/* <!--========== COLEÇÕES ==========--> */}
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
            <h3 className="shoesTitle">Snow Globe</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$9.45</span>
            <div
              aria-hidden
              className="button shoesButton"
              onClick={() => setHeart(!fullHeart)}
            >
              {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>

          <div className="shoesContent">
            <img src={img6} alt="" className="shoesImg" />
            <h3 className="shoesTitle">Candy</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$2.52</span>
            <div
              aria-hidden
              className="button shoesButton"
              onClick={() => setHeart(!fullHeart)}
            >
              {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>

          <div className="shoesContent">
            <img src={img6} alt="" className="shoesImg" />
            <h3 className="shoesTitle">Angel</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$13.15</span>
            <div
              aria-hidden
              className="button shoesButton"
              onClick={() => setHeart(!fullHeart)}
            >
              {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>

          <div className="shoesContent">
            <img src={img6} alt="" className="shoesImg" />
            <h3 className="shoesTitle">Sphere</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$4.25</span>
            <div
              aria-hidden
              className="button shoesButton"
              onClick={() => setHeart(!fullHeart)}
            >
              {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>

          <div className="shoesContent">
            <img src={img6} alt="" className="shoesImg" />
            <h3 className="shoesTitle">Surprise gift</h3>
            <span className="shoesCategory">shoes</span>
            <span className="shoesPreci">$7.99</span>
            <div
              aria-hidden
              className="button shoesButton"
              onClick={() => setHeart(!fullHeart)}
            >
              {(fullHeart) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
