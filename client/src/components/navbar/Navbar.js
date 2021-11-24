import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import { CgShoppingCart } from "react-icons/cg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const value = useContext(GlobalState);
  console.log(value);
  return (
    <nav className={styles.header}>
      <div>
        <h1>
          <Link className={styles.logo} to="/">
            eShop
          </Link>
        </h1>
      </div>
      <ul className={styles.nav__right}>
        <li>
          <Link className={styles.login} to="/login">
            Login
          </Link>
        </li>
        <div>
          <Link to="/cart" className={styles.cart}>
            <CgShoppingCart className={styles.cart__logo} /> cart
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
