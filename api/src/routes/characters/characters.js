const { Router } = require("express");
const router = Router();
const { getCharacters, getOneCharacter } = require("../controllers.js");
const { Character } = require("../../db.js");

const getAllCharacters = async (req, res) => {
  let { name } = req.query;
  if (!name) {
    let allCharacters = await getCharacters();
    res.status(200).send(allCharacters);
  } else {
    try {
      let characters = await getCharacters();
      let characterName = characters.filter((el) => el.firstName === name);
      characterName.length
        ? res.status(200).send(characterName)
        : res.status(404).send("Character not found");
    } catch (error) {
      console.log(error);
    }
  }
};

const getCharacterDetail = async (req, res) => {
  let { id } = req.params;
  try {
    const character = await getOneCharacter(id);
    res.status(200).json(character);
  } catch (error) {
    console.log(error);
  }
};

const createCharacter = async (req, res) => {
  let { firstName, lastName, title, family, fullName, image, id } = req.body;
  const character = { firstName, lastName, title, family, fullName, image, id };
  // console.log('charact', character)
  try {
    const characterValidate = await Character.findOrCreate({
      where: {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        title: title,
        image: image,
        family: family,
      },
    });
    res.status(200).send(characterValidate);
    // if (!characterValidate) {
    //   const newCharacter = await Character.create(character);
    //   res.status(200).send("Character created succesfully!");
    // }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCharacters,
  getCharacterDetail,
  createCharacter,
};
