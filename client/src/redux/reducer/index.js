const initialState = {
  characters: [],
  charactersCopy: [],
  characterDetail: {},
  continents: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
        charactersCopy: action.payload,
      };
    case "GET_CHARACTER_DETAIL":
      console.log("REDUCER ", action.payload);
      return {
        ...state,
        characterDetail: action.payload,
      };
    case "SET_STATE_DETAIL":
      return {
        ...state,
        characterDetail: {},
      };
    case "CREATE_CHARACTER":
      return {
        ...state,
      };
    case "SEARCH_CHARACTER":
      return {
        ...state,
        characters: action.payload,
      };
    case "FILTER_BY_HOUSE_NAME":
      const allCharacters = state.characters;
      const housesFiltered =
        action.payload === "All"
          ? allCharacters
          : allCharacters.filter((el) => el.lastName === action.payload);
          console.log("AP", action.payload)
          console.log("redu", housesFiltered)
      return {
        ...state,
        characters: housesFiltered,
      };
    default:
      return {
        ...state,
        characterDetail: {},
      };
  }
}

export default rootReducer;
