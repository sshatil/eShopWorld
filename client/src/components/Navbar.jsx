import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import "../styles/Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        logo
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
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
            <p className="nav-cart">
              <MdOutlineAddShoppingCart className="cart__logo" /> <span>0</span>
            </p>
          </Link>
        </li>
      </ul>
      {/* <Button /> */}
    </nav>
  );
};

export default Navbar;
