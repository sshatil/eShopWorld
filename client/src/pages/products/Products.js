import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import ProductItem from "../utils/ProductItem";
import styles from "./Products.module.css";

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  console.log(products);
  return (
    <div className={styles.product__section}>
      <div className={styles.products}>
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
