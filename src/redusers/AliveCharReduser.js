export default function AliveCharReduser(state, action) {
  if (action.type === "GET_CHARACTERS_BEGIN") {
    return { ...state, characters_loading: true };
  }
  if (action.type === "GET_CHARACTERS_SUCCESS") {
    const alive_characters = action.payload.filter(
      (character) => character.status === "Alive"
    );
    return {
      ...state,
      characters: action.payload,
      characters_loading: false,
      alive_characters,
    };
  }
  if (action.type === "GET_CHARACTERS_ERROR") {
    return { ...state, characters_loading: false, characters_error: true };
  }
  if (action.type === "GET_SINGEL_CHARACTERS_BEGIN") {
    return { ...state, singel_character_loading: true };
  }
  if (action.type === "GET_SINGEL_CHARACTERS_SUCCESS") {
    return {
      ...state,
      singel_character_loading: false,
      singel_character: action.payload,
    };
  }
  if (action.type === "GET_SINGEL_CHARACTERS_ERROR") {
    return {
      ...state,
      singel_character_error: true,
      singel_character_loading: false,
    };
  }
  return state;
}
