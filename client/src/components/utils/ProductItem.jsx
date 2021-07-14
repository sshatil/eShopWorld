import { Link } from 'react-router-dom';
import '../../styles/ProductItem.scss';

const ProductItem = ({ product, isAdmin }) => {
  const { title, description, price, _id } = product;
  return (
    <>
      <div className="product-item">
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
              <button type="button">
                <Link className="btn" to="/">
                  Delete
                </Link>
              </button>
              <button type="button">
                <Link className="btn" to={`/edit_product/${_id}`}>
                  Edit
                </Link>
              </button>
            </>
          ) : (
            <>
              <button type="button">
                <Link className="btn" to="/">
                  Buy
                </Link>
              </button>
              <button type="button">
                <Link className="btn" to={`/details/${_id}`}>
                  View
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
