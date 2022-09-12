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
      const allCharacters = state.charactersCopy;
      const housesFiltered =
        action.payload === "All"
          ? allCharacters
          : allCharacters.filter((el) => el.lastName.startsWith(action.payload.slice(0,5)) || el.family.includes(action.payload) || el.lastName === action.payload);
      return {
        ...state,
        charactersCopy: housesFiltered,
      };
    default:
      return {
        ...state,
        characterDetail: {},
      };
  }
}

export default rootReducer;
