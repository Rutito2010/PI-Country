const { Router } = require("express");
const router = Router();
const {
  allCountries,
  oneCountry,
  idCountry,
} = require("../controllers/countries");
router.get("/all", (req, res) => {
  allCountries()
    .then((result) => res.json(result))
    .catch((error) => console.log("2", error));
});
router.get("/", (req, res) => {
  const { name } = req.query;

  oneCountry(name)
    .then((oneResult) => res.json(oneResult))
    .catch((error) => console.log("1", error));
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // let lowerId = id.toUpperCase();
  idCountry(id)
    .then((idResult) => res.json(idResult))
    .catch((error) => console.log("3", error));
});

module.exports = router;
