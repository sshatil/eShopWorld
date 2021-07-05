import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Cart from '../components/Cart';
import Products from '../components/Products';
import NotFound from '../components/utils/NotFound';

const Home = () => (
  <Switch>
    <Route path="/" exact component={Products} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/cart" exact component={Cart} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Home;
