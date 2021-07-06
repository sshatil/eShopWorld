import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../GlobalState';
import '../styles/ProductDetails.scss';

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
    // <Grid container spacing={3} className="product-details">
    //   <Grid item xs={6} sm={6}>
    //     <img src={productDetails.images.url} alt="" />
    //   </Grid>
    //   <Grid item xs={6} sm={6} className="box-details">
    //     <div>
    //       <h2>{title}</h2>
    //       {/* <h6>{product_id}</h6> */}
    //     </div>
    //     <span>{price}</span>
    //     <p>{description}</p>
    //     <p>{content}</p>
    //     <p>{sold}</p>
    //     <Link to="/cart">Buy Now</Link>
    //   </Grid>
    // </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <img src={productDetails.images.url} alt="" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <h2>{title}</h2>
          {/* <h6>{product_id}</h6> */}
        </div>
        <span>{price}</span>
        <p>{description}</p>
        <p>{content}</p>
        <p>{sold}</p>
        <Link to="/cart">Buy Now</Link>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
