import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Pages />
    </Router>
  );
};

export default App;
