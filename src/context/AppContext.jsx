import React, { createContext, useContext, useState } from "react";
import data from "../data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [accordion, setAccordion] = useState(data);
  return (
    <AppContext.Provider value={{ accordion }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
