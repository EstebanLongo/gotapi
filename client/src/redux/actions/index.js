const axios = require("axios");

export const getCharacters = () => {
  return async function (dispatch) {
    let characters = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: "GET_CHARACTERS",
      payload: characters.data,
    });
  };
};

export const filterByHouseName = (payload) => {
  return {
    type: "FILTER_BY_HOUSE_NAME",
    payload
  }
};

export const createCharacter = (payload) => {
  return async function (dispatch) {
    try {
      let character = await axios.post(
        "http://localhost:3001/characters/create",
        payload
      );
      return character;
    } catch (error) {
      alert("Creation failed");
      console.log(error);
    }
  };
};

export function getCharacterDetail(id) {
  return async function (dispatch) {
    try {
      let detail = await axios.get("http://localhost:3001/characters/" + id);
      return dispatch({
        type: "GET_CHARACTER_DETAIL",
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setStateDetail() {
  return {
    type: "SET_STATE_DETAIL",
  };
}

export function searchCharacter(name) {
  return async function (dispatch) {
    try {
      let detail = await axios.get(
        "http://localhost:3001/characters?name=" + name
      );
      console.log("DET", detail);
      return dispatch({
        type: "SEARCH_CHARACTER",
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
