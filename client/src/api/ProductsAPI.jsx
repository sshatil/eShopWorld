import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductsAPI = () => {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('/api/products');
    setProduct(res.data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return {
    products: [products, setProduct],
  };
};

export default ProductsAPI;
