const { Router } = require("express");
const router = Router();
const { getContinents } = require("../controllers.js");
const { Continent } = require("../../db.js");

const getAllContinents = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    let allContinents = await getContinents();
    res.status(200).send(allContinents);
  } else {
    try {
      let continents = await getContinents();
      let continentName = continents.filter((el) => el.name === name);
      continentName.length
        ? res.status(200).send(continentName)
        : res.status(404).send("Continent not found");
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { getAllContinents };
