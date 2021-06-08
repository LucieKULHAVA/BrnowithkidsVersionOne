import React from 'react';

import './style.css';

const Footer = () => (
  <footer>
    <div className="footer__box">
      <div className="footer_contacts">
        <h3>Brno with Kids</h3>
        <div className="footer__copyright">
          <p>© Copyright 2021 Vicinis, z.s. Všechna práva vyhrazena.</p>
        </div>
      </div>
      <div className="contacts">
        <div className="logo-pic">
          <img
            className="logo"
            src="/assets/icons/logovicinis.png"
            alt="logo"
          />
        </div>
        <div className="contact">
          <p className="owner">Provozovatel:</p>
          <div className="address">
            <p>Vicinis, z.s.</p>
            <p>Liliová 12, 612 00 Brno</p>
            <p>info@vicinis.cz</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
