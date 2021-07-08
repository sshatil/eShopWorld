import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      await axios.post('/user/login', { ...user });

      localStorage.setItem('firstLogin', true);
      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  console.log(user);
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" onChange={handleInput} />
        <input type="password" name="password" placeholder="Your Password" onChange={handleInput} />
        <div>
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
