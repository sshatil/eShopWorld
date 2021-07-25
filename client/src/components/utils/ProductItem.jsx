import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import '../../styles/ProductItem.scss';

const ProductItem = ({ product, isAdmin }) => {
  const state = useContext(GlobalState);
  const { title, description, price, _id, checked } = product;
  const { addCart } = state.userApi;
  return (
    <>
      <div className="product-item">
        {isAdmin && <input type="checkbox" checked={checked} />}
        <img src={product.images.url} alt="" />
        <div className="product-item__header">
          <h3>{title}</h3>
          <h5>id</h5>
        </div>
        <p>
          Price: $<strong>{price}</strong>
        </p>
        <p>{description}</p>
        <div className="product-item__btn">
          {isAdmin ? (
            <>
              <Link className="btn" to="/">
                Delete
              </Link>
              <Link className="btn" to={`/edit_product/${_id}`}>
                Edit
              </Link>
            </>
          ) : (
            <>
              <Link className="btn" to="/" onClick={() => addCart(product)}>
                Buy
              </Link>
              <Link className="btn" to={`/details/${_id}`}>
                View
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
