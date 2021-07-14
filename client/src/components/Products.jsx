import { CircularProgress } from '@material-ui/core';
import { useContext } from 'react';
import { GlobalState } from '../GlobalState';
import '../styles/Products.scss';
import ProductItem from './utils/ProductItem';

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [isAdmin] = state.userApi.isAdmin;
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <ProductItem product={product} isAdmin={isAdmin} />
        ))}
      </div>
      {products.length === 0 && <CircularProgress />}
    </>
  );
};

export default Products;
