const { Router } = require("express");
const Countries = require("./countries");
const NewActivity = require("./activity");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", Countries);
router.use("/activity", NewActivity);

module.exports = router;
