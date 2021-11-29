import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import ProductItem from "../utils/ProductItem";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  let { id } = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [details, setDetails] = useState({});
  useState(() => {
    const newProduct = products.find((product) => product._id === id);
    setDetails(newProduct);
  }, [id]);
  console.log(details);
  // const { title, description, updatedAt, content, price, sold } = details;
  console.log(details);
  if (details.length === 0) return null;
  return (
    <div className={styles.product__details}>
      <div className={styles.cart}>
        {/* <img src={details.images.url} alt="" /> */}
        <div className={styles.details}>
          <h2>{details.title}</h2>
          <p>Price: $ {details.price}</p>
          <p>Total Sold: {details.sold}</p>
          {/* <p>Updated: {updatedAt}</p> */}
          <p>{details.content}</p>
          <p className={styles.description}>{details.description}</p>
          <Link to="/cart">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
      </div>
      <h1>Related Products</h1>
      <div className={styles.related__product}>
        {products.map((product) => {
          return product.category === details.category ? (
            <ProductItem product={product} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
