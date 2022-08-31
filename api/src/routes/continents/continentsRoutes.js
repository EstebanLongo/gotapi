const { Router } = require("express");
const continentsRouter = Router();
const { getAllContinents } = require("./continents.js");

continentsRouter.get("/", getAllContinents);

module.exports = continentsRouter