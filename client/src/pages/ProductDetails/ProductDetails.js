import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { GlobalState } from "../../GlobalState";

const ProductDetails = () => {
  let { id } = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [details, setDetails] = useState([]);
  useState(() => {
    const newProduct = products.find((product) => product._id === id);
    setDetails(newProduct);
  }, [id]);
  console.log(details);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ProductDetails;
