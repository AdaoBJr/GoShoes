import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

import Header from '../Components/Header';
import ScrollTop from '../Components/ScrollTop';
import Shoes from '../Components/Shoes';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';

export default function Home() {
  return (
    <div>
      {/* <!--========== SCROLL TOP ==========--> */}
      <ScrollTop />
      {/* <!--========== HEADER ==========--> */}
      <Header />

      <main className="l-main">
        {/* <!--========== HOME ==========--> INSERIR AQUI 3D */}
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__img">
              <img src={img1} alt="img-1" data-speed="-2" className="move" />
              <img src={img2} alt="img-2" data-speed="2" className="move" />
              <img src={img3} alt="img-3" data-speed="2" className="move" />
              <img src={img4} alt="img-4" data-speed="-2" className="move" />
              <img src={img5} alt="img-5" data-speed="-2" className="move" />
              <img src={img6} alt="img-6" data-speed="2" className="move" />
            </div>

            <div className="home__data">
              <h1 className="home__title">
                Go
                <br />
                {' '}
                Shoes
              </h1>
              <p className="home__description">
                Let`s shop?
                {' '}
                <br />
                {' '}
                Let`s GoShoes.
              </p>
              <a href className="home__button">Get Started</a>
            </div>
          </div>
        </section>

        {/* <!--========== COLEÇÕES ==========--> INSERIR AQUI PRODUTOS / COMPONETIZAR */}
        <Shoes />
      </main>
      {/* <!--========== FOOTER ==========--> */}
      <footer className="footer section">
        <div className="footer__container bd-container bd-grid">
          <div className="footer__content">
            <h3 className="footer__title">
              <a href className="footer__logo">Christmas Gift</a>
            </h3>
            <p className="footer__description">
              I sent a gift and it gives
              {' '}
              <br />
              {' '}
              happiness
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Services</h3>
            <ul>
              <li><a href className="footer__link">Pricing </a></li>
              <li><a href className="footer__link">Discounts</a></li>
              <li><a href className="footer__link">Shipping mode</a></li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Company</h3>
            <ul>
              <li><a href className="footer__link">Blog</a></li>
              <li><a href className="footer__link">About us</a></li>
              <li><a href className="footer__link">Our mision</a></li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>
            <SiFacebook className="footer__social" />
            <SiTwitter className="footer__social" />
            <SiInstagram className="footer__social" />
          </div>
        </div>

        <p className="footer__copy">&#169; 2021 AdamBJr. All right reserved</p>
      </footer>
    </div>
  );
}
