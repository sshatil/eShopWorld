import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import "../styles/Header.scss";

const Header = () => {
  const state = useContext(GlobalState);
  const [search, setSearch] = state.productsApi.search;
  return (
    <div className="header">
      <h1 className="header__title">Stay Home & Shop Online</h1>
      <div className="header__input">
        <input
          type="search"
          value={search}
          placeholder="Enter your search!"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        {/* <input type="search" /> */}
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Header;
