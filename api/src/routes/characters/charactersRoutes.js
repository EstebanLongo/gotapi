const { Router } = require("express");
const characterRouter = Router();
const { getAllCharacters, getCharacterDetail, createCharacter } = require("./characters.js");

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterDetail);
characterRouter.post("/create", createCharacter);

module.exports = characterRouter;