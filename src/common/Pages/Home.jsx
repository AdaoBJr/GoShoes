import React from 'react';
import Header from '../Components/Header';
import ScrollTop from '../Components/ScrollTop';

export default function Home() {
  return (
    <div>
      {/* <!--========== SCROLL TOP ==========--> */}
      <ScrollTop />
      {/* <!--========== HEADER ==========--> */}
      <Header />

      <main className="l-main">
        {/* <!--========== HOME ==========--> */}
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__img">
              <img src="assets/img/home.png" alt="" />
            </div>

            <div className="home__data">
              <h1 className="home__title">Send A Gift For Christmas</h1>
              <p className="home__description">In these end of the year holidays send a gift to your loved one and share the happiness at Christmas.</p>
              <a href="#" className="button">Get Started</a>
            </div>
          </div>
        </section>

        {/* <!--========== SHARE ==========--> */}
        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center">
                Sharing Is The Best Gift
                {' '}
                <br />
                {' '}
                You Can Give
              </h2>
              <p className="share__description">Sharing these holidays is the best gift you can give, give a present or share your love with the people you love the most and celebrate with great happiness.</p>
              <a href className="button">Send a Gift</a>
            </div>

            <div className="share__img">
              <img src="assets/img/shared.png" alt="" />
            </div>
          </div>
        </section>

        {/* <!--========== DECORATION ==========--> */}
        <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title">
            Give Christmas Decorations
            {' '}
            <br />
            {' '}
            For Your Home
          </h2>
          <div className="decoration__container bd-grid">
            <div className="decoration__data">
              <img src="assets/img/decoration1.png" alt="" className="decoration__img" />
              <h3 className="decoration__title">Christmas Bells</h3>
              <a href className="button button-link">Go Shopping</a>
            </div>

            <div className="decoration__data">
              <img src="assets/img/decoration2.png" alt="" className="decoration__img" />
              <h3 className="decoration__title">Christmas Candies</h3>
              <a href className="button button-link">Go Shopping</a>
            </div>

            <div className="decoration__data">
              <img src="assets/img/decoration3.png" alt="" className="decoration__img" />
              <h3 className="decoration__title">Christmas Trees</h3>
              <a href className="button button-link">Go Shopping</a>
            </div>
          </div>
        </section>

        {/* <!--========== ACCESSORIES ==========--> */}
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

        {/* <!--========== SEND GIFT ==========--> */}
        <section className="send section">
          <div className="send__container bd-container bd-grid">
            <div className="send__content">
              <h2 className="section-title-center send__title">Send Gift Now</h2>
              <p className="send__description">Start giving away before the holidays are over. Write the home address of the person who will send the gift.</p>
              <form action="">
                <div className="send__direction">
                  <input type="text" placeholder="House address" className="send__input" />
                  <a href className="button">Send</a>
                </div>
              </form>
            </div>

            <div className="send__img">
              <img src="assets/img/send.png" alt="" />
            </div>
          </div>
        </section>
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
            <a href className="footer__social"><i className="bx bxl-facebook-circle " /></a>
            <a href className="footer__social"><i className="bx bxl-twitter" /></a>
            <a href className="footer__social"><i className="bx bxl-instagram-alt" /></a>
          </div>
        </div>

        <p className="footer__copy">&#169; 2021 AdamBJr. All right reserved</p>
      </footer>
    </div>
  );
}
