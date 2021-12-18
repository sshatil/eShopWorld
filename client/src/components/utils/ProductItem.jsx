import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "../../styles/ProductItem.scss";

const ProductItem = ({ product }) => {
  const state = useContext(GlobalState);
  const addToCart = state.userApi.addToCart;
  const { title, product_id, price } = product;
  return (
    <div className="product__item">
      <div className="product__item__img">
        <img src={product.images.url} alt="" />
      </div>
      <div className="product__details">
        <div className="product__header">
          <h3>{title}</h3>
          {/* <p className="product__id">id: {product_id}</p> */}
        </div>
      </div>
      <h5 className="product__price">Price: $ {price}</h5>
      <div className="btn">
        <Link to="#!" onClick={() => addToCart(product)}>
          <button>Add to Cart</button>
        </Link>
        <Link to={`/details/${product._id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
