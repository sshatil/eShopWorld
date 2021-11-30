import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Stay Home & Shop Online</h1>
      <div className="header__input">
        <input type="search" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Header;
