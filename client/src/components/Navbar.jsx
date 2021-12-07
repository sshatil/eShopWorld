import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import "../styles/Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GlobalState } from "../GlobalState";
import axios from "axios";

const Navbar = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  const [cart] = state.userApi.cart;

  console.log(state);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const handleLogout = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {isAdmin ? "Admin" : "eShopWorld"}
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i style={{ color: "white" }}>
          {click ? <FaTimes /> : <AiOutlineBars />}
        </i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        {isAdmin && (
          <>
            <li className="nav-item">
              <Link
                to="/create-product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create-product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>
          </>
        )}
        {isLogged ? (
          <>
            <li className="nav-item">
              <Link
                to="/history"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(closeMobileMenu, handleLogout)}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        )}
        {/* <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
        </li> */}

        {isAdmin ? (
          ""
        ) : (
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <p className="nav-cart">
                <MdOutlineAddShoppingCart className="cart__logo" />{" "}
                <span>{cart.length}</span>
              </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
