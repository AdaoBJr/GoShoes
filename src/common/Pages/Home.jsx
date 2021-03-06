import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiUpArrowAlt } from 'react-icons/bi';
import ALink from 'react-anchor-link-smooth-scroll';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Shoes from '../Components/Shoes';
import img101 from '../../images/img1-1.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img6 from '../../images/img6.png';

export default function Home() {
  const [ScrollY, setScrollY] = useState(false);

  /*= ==== MOUSEMOVE HOME IMG ===== */
  const move = (e) => {
    document.querySelectorAll('.move').forEach((layer) => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * speed) / 120;
      const y = (window.innerHeight - e.pageY * speed) / 120;

      // eslint-disable-next-line no-param-reassign
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  document.addEventListener('mousemove', move);

  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <div>
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#home" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'} id="scroll-top">
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>
      {/* <!--========== HEADER ==========--> */}
      <Header colec={ScrollY} />

      <main className="main">
        {/* <!--========== HOME ==========--> */}
        <section className="home" id="home">
          <div className="homeContainer bdGrid">
            <div data-aos="fade-down" data-aos-delay="500" className="homeImg">
              <img src={img101} alt="img-1" data-speed="-2" className="imgs move" />
              <img src={img1} alt="img-1" data-speed="7" className="imgs move" />
              <img src={img2} alt="img-2" data-speed="-4" className="imgs move" />
              <img src={img4} alt="img-4" data-speed="3" className="imgs move" />
              <img src={img3} alt="img-3" data-speed="-5" className="img3 move" />
              <img src={img6} alt="img-6" data-speed="2" className="img6 move" />
            </div>
            <div data-aos="fade-down" className="homeData">
              <h1 className="homeTitle">
                GoShoes
              </h1>
              <p className="homeDescription">
                Let&#39;s shop?
                {' '}
                <br />
                {' '}
                Let&#39;s GoShoes.
              </p>
              <ALink href="#shoes" className="homeButton">Get Started</ALink>
            </div>
          </div>
        </section>

        {/* <!--========== COLE????ES ==========--> */}
        <Shoes />
      </main>
      {/* <!--========== FOOTER ==========--> */}
      <Footer />
    </div>
  );
}
