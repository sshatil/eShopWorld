/* eslint-disable jsx-a11y/no-static-element-interactions */
// import Button from '../Button/Button';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const state = useContext(GlobalState);
  const [isLoggedIn, setIsLoggedIn] = state.userApi.isLoggedIn;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  const [cart] = state.userApi.cart;
  console.log(state);
  const logoutUser = async () => {
    await axios.get('/user/logout');
    localStorage.clear();
    setIsAdmin(false);
    setIsLoggedIn(false);
  };
  console.log(cart);
  const adminRouter = () => (
    <>
      <li>
        <Link to="/createProducts">Create Product</Link>
      </li>
      <li>
        <Link to="/category">Categories</Link>
      </li>
    </>
  );
  // const userRouter = () => (
  //   <>
  //     <li>
  //       <Link to="/history">History</Link>
  //     </li>
  //     <li>
  //       <Link to="/" onClick={logoutUser}>
  //         Logout
  //       </Link>
  //     </li>
  //   </>
  // );
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {isAdmin ? 'Admin' : 'Logo'}
      </Link>
      {isAdmin && adminRouter()}
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <>
            <li className="nav-item">
              <Link to="/history" className="nav-links" onClick={closeMobileMenu}>
                History
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={(closeMobileMenu, logoutUser)}>
                Logout
              </Link>
            </li> */}
          </>
        )}
        {isLoggedIn ? (
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={(closeMobileMenu, logoutUser)}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        )}
        {isAdmin ? (
          ''
        ) : (
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              Cart <span>{cart.length}</span>
            </Link>
          </li>
        )}
      </ul>
      {/* <Button /> */}
    </nav>
  );
};

export default Navbar;
