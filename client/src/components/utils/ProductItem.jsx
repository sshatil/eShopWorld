import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProductItem.scss";

const ProductItem = ({ product }) => {
  const { title, product_id, price } = product;
  return (
    <div className="product__item">
      <div className="product__item__img">
        <img src={product.images.url} alt="" />
      </div>
      <div className="product__details">
        <div className="product__header">
          <h3>{title}</h3>
          <p className="product__id">id: {product_id}</p>
        </div>
        <h5>Price: $ {price}</h5>
        <div className="btn">
          <Link to="/cart">
            <button>Add to Cart</button>
          </Link>
          <Link to={`/details/${product._id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
