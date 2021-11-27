import React from "react";
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search");
  };
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <form onSubmit={handleSearch}>
          <input className={styles.search__input} type="search" />
          <button className={styles.btn} type="submit">
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
