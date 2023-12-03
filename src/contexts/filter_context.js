//Contexts/products_Context.js
import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import filter_reducer from "../redusers/filter_reducer";
import { charArr } from "../data/charArr";

const FilterContext = React.createContext();

const initialState = {
  filtered_characters: [],
  all_characters: [],
  filters: {
    status: "all",
    species: "all",
    gender: "all",
  },
};
export const FilterProvider = ({ children }) => {
 const characters=charArr.results
  

  const [state, dispatch] = useReducer(filter_reducer, initialState);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "status" || name === "species" || name === "gender") {
      value = e.target.textContent;
    }

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_CHARACTERS", payload: characters });
  }, [characters ,state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_CHARACTERS", payload: characters });
  }, [characters]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
