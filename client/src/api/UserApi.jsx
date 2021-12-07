import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "../components/utils/Alert";

const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setCart(res.data.cart);
        } catch (error) {
          console.log(error.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);
  const addToCart = async (product) => {
    if (!isLogged) return alert("You must be logged in first");
    const check = cart.every((item) => item.id === product.id);
    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
      await axios.patch(
        "/user/addcart",
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
    } else {
      alert("this product already added");
    }
  };
  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addToCart: addToCart,
  };
};

export default UserApi;
