import React from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Products />
    </div>
  );
};

export default Home;
