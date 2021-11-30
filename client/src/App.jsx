// import "./styles/App.scss";

import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalState } from "./GlobalState";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import NotFound from "./components/utils/NotFound";

function App() {
  const data = useContext(GlobalState);
  // console.log(data);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
