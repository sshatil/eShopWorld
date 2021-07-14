import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import '../../styles/Header.scss';
// import { FaBeer } from 'react-icons/fa';

const Header = () => {
  const state = useContext(GlobalState);
  const [isLoggedIn, setIsLoggedIn] = state.userApi.isLoggedIn;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  console.log(state);
  const logoutUser = async () => {
    await axios.get('/user/logout');
    localStorage.clear();
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

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
  const userRouter = () => (
    <>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </>
  );
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? 'Admin' : 'Logo'}</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">{isAdmin ? 'Product' : 'Shop'}</Link>
        </li>
        {isAdmin && adminRouter()}
        {isLoggedIn ? (
          userRouter()
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <div>
        {isAdmin ? (
          ''
        ) : (
          <h4>
            <Link to="/cart">
              Cart <span>0</span>
            </Link>
          </h4>
        )}
      </div>
    </header>
  );
};

export default Header;
