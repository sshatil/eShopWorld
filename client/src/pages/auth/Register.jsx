import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          required
          placeholder="Enter your email"
          value={user.email}
        />
        <input
          type="text"
          name="password"
          required
          placeholder="Enter your password"
          value={user.password}
        />
        <div className="">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
