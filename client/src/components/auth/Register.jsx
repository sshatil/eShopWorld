import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleInput = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/register', { ...user });

      localStorage.setItem('firstLogin', true);
      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  console.log(user);
  return (
    <div className="login">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="login__input"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInput}
        />
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
            Register
          </button>
          <Link className="register-link" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
