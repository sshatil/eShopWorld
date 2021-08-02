import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../GlobalState';

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart] = state.userApi.cart;
  console.log(cart);
  return (
    <div>
      {cart.length === 0 && <h1 style={{ color: 'white' }}>No order found</h1>}
      {cart.map((product) => (
        <Grid container className="product-details" key={product._id}>
          <Grid item xs={12} sm={6} className="product-details__img">
            <img src={product.images.url} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} className="box-details">
            <div className="box-details__title">
              <h2>{product.title}</h2>
              <span>
                <strong>$ {product.price}</strong>{' '}
              </span>
              {/* <h6>{product_id}</h6> */}
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold {product.sold}</p>
            {/* <Link to="/cart">Buy Now</Link> */}
            <Link to="/cart">
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </Link>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Cart;
