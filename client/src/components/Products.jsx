import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import ProductItem from "./utils/ProductItem";
import Loading from "./utils/Loading";
import "../styles/Products.scss";

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  return (
    <>
      <div className="products__container">
        <h1>Recent Products</h1>
        <div className="products">
          {products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      </div>
      {products.length === 0 && <Loading />}
    </>
  );
};

export default Products;
