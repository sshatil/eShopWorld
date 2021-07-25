import axios from 'axios';
import { useEffect, useState } from 'react';

const UserAPI = (token) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get('/user/infor', {
            headers: { Authorization: token },
          });
          setIsLoggedIn(true);
          // eslint-disable-next-line no-unused-expressions
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);
  // user Cart
  // eslint-disable-next-line consistent-return
  const addCart = async (product) => {
    if (!isLoggedIn) return alert('Please login for buying');
    const check = cart.every((item) => item._id !== product._id);
    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert('This product has been added to cart');
    }
  };
  return {
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart,
  };
};

export default UserAPI;
