import { CircularProgress, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { GlobalState } from '../GlobalState';
import '../styles/Products.scss';
import ProductItem from './utils/ProductItem';

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  return (
    <>
      <div className="products">
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={4} md={3} key={product._id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      {products.length === 0 && <CircularProgress />}
    </>
  );
};

export default Products;
