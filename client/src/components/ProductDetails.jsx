import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../GlobalState';
import '../styles/ProductDetails.scss';
import ProductItem from './utils/ProductItem';

const ProductDetails = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    products.forEach((product) => {
      if (product._id === params.id) setProductDetails(product);
    });
  }, [params.id, products]);
  console.log(productDetails);
  const { title, price, description, content, sold } = productDetails;
  if (productDetails.length === 0) return null;
  return (
    <>
      <Grid container className="product-details">
        <Grid item xs={12} sm={6} className="product-details__img">
          <img src={productDetails.images.url} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} className="box-details">
          <div className="box-details__title">
            <h2>{title}</h2>
            <span>
              <strong>$ {price}</strong>{' '}
            </span>
            {/* <h6>{product_id}</h6> */}
          </div>
          <p>{description}</p>
          <p>{content}</p>
          <p>Sold {sold}</p>
          {/* <Link to="/cart">Buy Now</Link> */}
          <Link to="/cart">
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div>
        <h2>Related Products</h2>
        <div className="products">
          {products.map((product) =>
            product.category === productDetails.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
