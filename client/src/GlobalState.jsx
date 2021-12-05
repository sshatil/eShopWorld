import { createContext, useState } from "react";
import ProductsApi from "./api/ProductsApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  // const [alert, setAlert] = useState({ show: true, msg: "" });

  const state = {
    token: [token, setToken],
    productsApi: ProductsApi(),
    // alert: [alert, setAlert],
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
