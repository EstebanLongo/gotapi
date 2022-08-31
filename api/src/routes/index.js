const { Router } = require("express");
const characterRouter = require("./characters/charactersRoutes.js");
const continentsRouter = require("./continents/continentsRoutes.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/characters", characterRouter);
router.use("/continents", continentsRouter);

module.exports = router;
