import React from 'react';

import './style.css';

const Footer = () => (
  <footer>
    <div className="footer__box">
      <div className="footer_contacts">
        <h3>Where to find us</h3>
        <img className="logo" src="/assets/icons/logovicinis.png" alt="logo" />
        <p>Liliová 12</p>
        <p>Brno, 612 00</p>
      </div>
      <div className="footer__links">
        <a href="https://www.facebook.com/VicinisNGO">
          <img src="/assets/icons/FB icon.png" alt="facebook icon" />
        </a>
        <a href="mailto:info@vicinis.cz">
          <img src="/assets/icons/envelop icon.png" alt="envelop icon" />
        </a>
        {/* <img src="/assets/icons/chat icon.png" alt="chat icon" /> */}
      </div>
    </div>
    <div className="footer__copyright">
      <p>© Copyright 2021 Vicinis, z.s. Všechna práva vyhrazena.</p>
    </div>
  </footer>
);

export default Footer;
