const axios = require("axios");
const { Character } = require("../db.js");

const getCharacters = async () => {
  try {
    const checkDb = await Character.findAll();
    if (checkDb.length > 0) {
      console.log("DB is ready");
      return checkDb;
    }
    const response = await axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.data);
    await response.map((el) => {
      Character.findOrCreate({
        where: {
          id: el.id,
          firstName: el.firstName,
          lastName: el.lastName,
          fullName: el.fullName,
          title: el.title,
          image: el.imageUrl,
          family: el.family,
        },
      });
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getOneCharacter = async (id) => {
  try {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters/" + id
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getContinents = async () => {
  try {
    const response = await axios
      .get("https://thronesapi.com/api/v2/Continents")
      .then((response) => response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCharacters, getContinents, getOneCharacter };
