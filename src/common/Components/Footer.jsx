import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footerContainer bdContainer bdGrid">
        <div className="footerContent">
          <h3 className="footerTitle">
            <a href className="footerLogo">GoShoes</a>
          </h3>
          <p className="footerDescription">
            Envie um presente e
            {' '}
            <br />
            {' '}
            proporcione alegria
          </p>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Nossos Serviços</h3>
          <ul>
            <li><a href className="footerLink">Orçamento</a></li>
            <li><a href className="footerLink">Descontos</a></li>
            <li><a href className="footerLink">Frete</a></li>
          </ul>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Quem somos</h3>
          <ul>
            <li><a href className="footerLink">Blog</a></li>
            <li><a href className="footerLink">Sobre nós</a></li>
            <li><a href className="footerLink">Nossa Missão</a></li>
          </ul>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Social</h3>
          <SiFacebook className="footerSocial" />
          <SiTwitter className="footerSocial" />
          <SiInstagram className="footerSocial" />
        </div>
      </div>

      <p className="footerCopy">&#169; 2021 AdamBJr. All right reserved</p>
    </footer>
  );
}
