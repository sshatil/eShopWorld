import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const { title, product_id, price, sold } = product;
  return (
    <div className={styles.product__items}>
      <img src={product.images.url} alt="" />
      <div className={styles.product__details}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{product_id}</p>
        </div>
        <h6>$ {price}</h6>
        <p>{sold}</p>
        <div className={styles.btn}>
          <Link to="cart">
            <button>Buy</button>
          </Link>
          <Link to={`details/${product._id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
