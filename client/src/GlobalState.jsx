import { createContext } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  return (
    <GlobalState.Provider value={"globalState"}>
      {children}
    </GlobalState.Provider>
  );
};
