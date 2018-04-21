import React from 'react';

import Logo from '../Nav/Logo';

const Footer = (props) => {

  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-logos">
          <span className="fab fa-facebook footer-logos-fb"></span>
          <Logo />
          <span className="fab fa-telegram-plane footer-logos-tg"></span>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright-c">Russian Hackers &copy;</p>
          <p className="footer-copyright-a">All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
