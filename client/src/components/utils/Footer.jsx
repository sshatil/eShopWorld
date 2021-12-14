import React, { useState, useEffect } from "react";
import "../../styles/Footer.scss";

const Footer = () => {
  const [clock, setClock] = useState({ hour: "", minute: "", second: "" });
  // console.log(date.getHours(), date.getMinutes(), date.getSeconds());
  useEffect(() => {
    const date = new Date();
    const timeout = setTimeout(() => {
      setClock({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [clock]);
  return (
    <div className="footer__section">
      <div className="footer">
        <div className="left">
          <div className="left__help">
            <p>My Account</p>
            <p>Review</p>
            <p>Contact Us</p>
          </div>
          <div className="left__shop">
            <p>Home</p>
            <p>Order Items</p>
            <p>About Us</p>
          </div>
        </div>
        <div className="right">
          <div className="newsletter">
            <p>Sign up for our newsletter</p>
            <form className="newsletter__form">
              <input type="text" placeholder="Enter your email" />
              <button className="btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="clock">
            <p>{clock.hour < 9 ? `0${clock.hour}` : clock.hour}&nbsp;:&nbsp;</p>
            <p>
              {clock.minute < 9 ? `0${clock.minute}` : clock.minute}
              &nbsp;:&nbsp;
            </p>
            <p>{clock.second < 9 ? `0${clock.second}` : clock.second}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
