import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/Login.scss";
import { GlobalState } from "../../GlobalState";
import Alert from "../../components/utils/Alert";

const Login = () => {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      // setAlert({ show: true, msg: error.response.data.msg });
      handleAlert(true, error.response.data.msg, "error");
      // console.log(error.response.data.msg);
    }
  };
  console.log(user);

  return (
    <div className="login">
      {alert.show && <Alert {...alert} handleAlert={handleAlert} />}
      <div className="login__section">
        <form onSubmit={handleSubmit} className="login__form">
          <h2>Login Form</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={user.name}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Enter your email"
            value={user.email}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="password"
            required
            placeholder="Enter your password"
            value={user.password}
            onChange={handleOnChange}
          />
          <div className="login__btn">
            <button type="submit">Register</button>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
