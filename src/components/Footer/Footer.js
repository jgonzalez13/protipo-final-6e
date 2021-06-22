/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <span className="footer__span m-3">Total: $0.00</span>
    <button className="footer__button">
      <span>Ordenar</span>
      <i className="footer__icon"></i>
    </button>
  </footer>
);
export default Footer;
