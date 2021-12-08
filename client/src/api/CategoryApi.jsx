import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryApi = () => {
  const [categories, setCategories] = useState([]);
  const [callback, setCallback] = useState(false);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/category");
      setCategories(res.data);
    };
    getCategories();
  }, [callback]);
  return {
    categories: [categories, setCategories],
    callback: [callback, setCallback],
  };
};

export default CategoryApi;
