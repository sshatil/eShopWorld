import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import ProductItem from "../utils/ProductItem";

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Products;
