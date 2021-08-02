import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login.scss';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleInput = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://eshopworld.herokuapp.com/user/login', { ...user });

      localStorage.setItem('firstLogin', true);
      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  console.log(user);
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Your Password"
          onChange={handleInput}
        />
        <div className="login__btn">
          <button className="login__input" type="submit">
            Login
          </button>
          <Link className="register-link" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
