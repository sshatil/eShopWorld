import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import "../styles/ProductDetails.scss";
import ProductItem from "./utils/ProductItem";

const ProductDetails = () => {
  const { id } = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [details, setDetails] = useState([]);

  const addToCart = state.userApi.addToCart;
  useEffect(() => {
    products.forEach((product) => {
      if (product._id === id) setDetails(product);
    });
    // }
  }, [id, products]);
  if (details.length === 0) return null;
  const { title, sold, product_id, price, description, content, category } =
    details;
  return (
    <div className="product__detail">
      <div className="details">
        <div className="left">
          <img src={details.images.url} alt="" />
        </div>
        <div className="right">
          <div className="title">
            <h3>{title}</h3>
            <p>{product_id}</p>
          </div>
          <p>Category: {category}</p>
          <p>Total sold: {sold}</p>
          <p>Content: {content}</p>
          <p>Price: $ {price}</p>
          <p>{description}</p>
          {/* <Link to="/cart"> */}
          <button className="add__btn" onClick={() => addToCart(details)}>
            Add To Cart
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div>
        <h2 className="related__product">Related Products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === details.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
