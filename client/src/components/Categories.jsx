import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";

const Categories = () => {
  const state = useContext(GlobalState);
  console.log(state);
  const [categories, setCategories] = state.categoriesApi.categories;
  const [category, setCategory] = useState("");
  const [token] = state.token;
  const [callback, setCallback] = state.categoriesApi.callback;
  const [onEdit, setOnEdit] = useState(false);
  const [id, setId] = useState("");
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/category/${id}`,
          { name: category },
          {
            headers: { Authorization: token },
          }
        );

        alert(res.data.msg);
      } else {
        const res = await axios.post(
          "/api/category",
          { name: category },
          {
            headers: { Authorization: token },
          }
        );

        console.log(res);
      }
      setOnEdit(false);
      setCategory("");
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleEditCategory = (id, name) => {
    setId(id);
    setCategory(name);
    setOnEdit(true);
  };
  const handleDeleteCategory = async (id) => {
    try {
      const res = await axios.delete(
        `/api/category/${id}`,
        { name: category },
        {
          headers: { Authorization: token },
        }
      );
      alert(res.data.msg);
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="categories">
      <form onSubmit={createCategory}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">{onEdit ? "Update" : "Save"}</button>
      </form>
      <div className="col">
        {categories.map((category) => {
          return (
            <div className="" key={category._id}>
              <p>{category.name}</p>
              <div className="">
                <button
                  onClick={() =>
                    handleEditCategory(category._id, category.name)
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteCategory(category._id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
