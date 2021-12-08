// import "./styles/App.scss";

import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalState } from "./GlobalState";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import NotFound from "./components/utils/NotFound";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./components/Cart";
import Categories from "./components/Categories";

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;
  const [isAdmin] = state.userApi.isLogged;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" exact component={ProductDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/category"
          exact
          component={isAdmin ? Categories : NotFound}
        />
        <Route path="/cart" exact component={Cart} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
