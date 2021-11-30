import React from "react";
import "../../styles/ProductItem.scss";

const ProductItem = ({ product }) => {
  const { title, product_id, price } = product;
  return (
    <div className="product__item">
      <img className="product__item__img" src={product.images.url} alt="" />
      <div className="product__details">
        <div className="product__header">
          <h3>{title}</h3>
          <p className="product__id">id: {product_id}</p>
        </div>
        <h5>Price: $ {price}</h5>
        <div className="btn">
          <button>Add to Cart</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
