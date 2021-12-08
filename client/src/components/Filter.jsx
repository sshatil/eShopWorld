import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";

const Filter = () => {
  const state = useContext(GlobalState);
  const categories = [
    {
      _id: "1",
      name: "women",
    },
    {
      _id: "2",
      name: "men",
    },
    {
      _id: "3",
      name: "animal",
    },
  ];
  const [products, setProducts] = state.productsApi.products;
  const [category, setCategory] = state.productsApi.category;
  const [sort, setSort] = state.productsApi.sort;
  const [search, setSearch] = state.productsApi.search;
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <div className="">
        <span>Filters: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Product</option>
          {categories.map((category) => (
            <option value={`category= ${category._id}`} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      />
    </div>
  );
};

export default Filter;
