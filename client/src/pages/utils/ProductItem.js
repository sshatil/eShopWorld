import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  // const { title, product_id, price, sold } = product;
  return (
    <div className={styles.product__items}>
      <div className={styles.product__img}>
        <img src={product.images.url} alt="" />
      </div>
      <div className={styles.product__details}>
        <div className={styles.title}>
          <h3>{product.title}</h3>
          <p className={styles.product__id}>{product.product_id}</p>
        </div>
        <h5 className={styles.product__price}>Price: $ {product.price}</h5>
        <p>Total Sold: {product.sold}</p>
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
