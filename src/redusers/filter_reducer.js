//Reducers/filter_reducer.js
export default function filter_reducer(state, action) {
  if (action.type === "LOAD_CHARACTERS") {
    return {
      ...state,
      filtered_characters: [...action.payload],
      all_characters: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        status: "all",
        species: "all",
        gender: "all",
      },
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === "FILTER_CHARACTERS") {
    const { status, species, gender } = state.filters;
    const { all_characters } = state;
    let tempCharacters = [...all_characters];

    if (status !== "all") {
      tempCharacters = tempCharacters.filter((char) => {
        return char.status.toLowerCase() === status.toLowerCase();
      });
    }

    if (species !== "all") {
      tempCharacters = tempCharacters.filter((char) => {
        return char.species.toLowerCase() === species.toLowerCase();
      });
    }
    if (gender !== "all") {
      tempCharacters = tempCharacters.filter((char) => {
        return char.gender.toLowerCase() === gender.toLowerCase();
      });
    }

    return {
      ...state,
      filtered_characters: tempCharacters,
    };
  }
}
