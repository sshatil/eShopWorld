import { createContext } from 'react';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => (
  <GlobalState.Provider value="value">{children}</GlobalState.Provider>
);
