import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import "../styles/Cart.scss";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userApi.cart;
  const [total, setTotal] = useState(0);
  const [token] = state.token;
  console.log(cart);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
  }, [cart]);
  // after delete product set new product
  const addToCart = async () => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    addToCart();
  };
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        if (item.quantity >= 1) {
          item.quantity -= 1;
        }
      }
    });
    setCart([...cart]);
    addToCart();
  };

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this product")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      addToCart();
    }
  };
  if (cart.length === 0) {
    return <h2 className="empty__cart">Cart is empty</h2>;
  }
  return (
    <div className="product__detail">
      {cart.map((product) => {
        const {
          title,
          product_id,
          category,
          sold,
          content,
          price,
          description,
          quantity,
          _id,
        } = product;
        return (
          <div className="details" key={_id}>
            <div className="left">
              <img src={product.images.url} alt="" />
            </div>
            <div className="right">
              <div className="title">
                <h3>{title}</h3>
                <p>{product_id}</p>
              </div>
              <p>Category: {category}</p>
              <p>Total sold: {sold}</p>
              <p>Content: {content}</p>
              <p>Price: $ {price}</p>
              <p>Total Price: $ {price * quantity}</p>
              <p>{description}</p>
              <div className="total__quantity">
                <button onClick={() => decrement(_id)}> - </button>
                <span className="total__quantity__count">{quantity}</span>
                <button onClick={() => increment(_id)}> + </button>
              </div>
              <button className="add__btn" onClick={() => removeItem(_id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div className="total__amount">
        <p>
          Total Amount: <span>$ {total}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Cart;
