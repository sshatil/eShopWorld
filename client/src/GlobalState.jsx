import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ProductsApi from "./api/ProductsApi";
import UserApi from "./api/UserApi";
import CategoriesApi from "./api/CategoryApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get("/user/refresh_token");
    setToken(res.data.accesstoken);
    setTimeout(() => {
      refreshToken();
    }, 15000);
  };
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    productsApi: ProductsApi(),
    userApi: UserApi(token),
    categoriesApi: CategoriesApi(),
    // alert: [alert, setAlert],
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
