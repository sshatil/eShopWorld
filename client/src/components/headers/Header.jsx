import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import '../../styles/Header.scss';
// import { FaBeer } from 'react-icons/fa';

const Header = () => {
  const value = useContext(GlobalState);
  console.log(value);
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div>
        <h4>
          <Link to="/cart">
            Cart <span>0</span>
          </Link>
        </h4>
      </div>
    </header>
  );
};

export default Header;
