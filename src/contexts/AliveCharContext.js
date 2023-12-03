import axios from "axios";
import React, { useReducer ,useEffect,useContext } from "react";
import AliveCharReduser from "../redusers/AliveCharReduser"
const AliveCharContext = React.createContext();

const initialState = {
  characters: [],
  characters_loading: false,
  characters_error: false,
  alive_characters: [],
  singel_character: {},
  singel_character_loading: false,
  singel_character_error: false,
};

export const AliveCharProvider = ({children}) => {
  const [state, dispatch] = useReducer(AliveCharReduser, initialState);

  const fetchCharacters = async (url) => {
    dispatch({ type: "GET_CHARACTERS_BEGIN" });
    try {
      const response = await axios(url);
      const charcters = response.data.results;
      dispatch({ type: "GET_CHARACTERS_SUCCESS", payload: charcters });
    } catch (error) {
      dispatch({ type: "GET_CHARACTERS_ERROR" });
    }
  };

  const fetchSingelCharacter = async (url) => {
    dispatch({ type: "GET_SINGEL_CHARACTERS_BEGIN" });
    try {
      const response = await axios(url);
      const single_character = response.data;
      dispatch({
        type: "GET_SINGEL_CHARACTERS_SUCCESS",
        payload: single_character,
      });
    } catch (error) {
      dispatch({ type: "GET_SINGEL_CHARACTERS_ERROR" });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <AliveCharContext.Provider value={{ ...state, fetchSingelCharacter }}>
      {children}
    </AliveCharContext.Provider>
  );
};

export const useCharactersContext = () => {
  return useContext(AliveCharContext);
};
