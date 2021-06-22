/* eslint-disable react/button-has-type */
import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-btn-container">
      <button className="header-btn-container__button" />
      <button className="header-btn-container__button" />
    </div>
    <span>
      <input
        className="header__input"
        type="text"
        placeholder="Buscar un producto"
      />
    </span>
  </header>
);

export default Header;
