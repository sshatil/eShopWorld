import React from "react";
import Home from "./home/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import NotFound from "./utils/NotFound";
import ProductDetails from "./ProductDetails/ProductDetails";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={ProductDetails} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/cart" exact component={Cart} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default Pages;
