import { createContext, useReducer } from "react";
import { Reducer } from "./Reduce";
import { Store } from "./Store";

export const BASE_CONTEXTE = createContext();

const Contexte = ({ children }) => {
  const [state, dispacth] = useReducer(Reducer, Store);
  return (
    <BASE_CONTEXTE.Provider value={{ state, dispacth }}>
      {children}
    </BASE_CONTEXTE.Provider>
  );
};

export default Contexte;
