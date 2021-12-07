const { Router } = require("express");
const { Activity, Country } = require("../db");
const { oneCountry } = require("../controllers/countries");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, seasson, place } = req.body;

    const newActivity = await Activity.create({
      //findOrCreate-
      name,
      difficulty,
      duration,
      seasson,
    });
    // const countries = place?.map(async (e) => {
    //   try {
    //     const places = await Country.findOne(
    //       {
    //         where: {
    //           name: e,
    //         },
    //       },
    //       { attribute: [id] }
    //     );
    //     console.log(newActivity);
    //     await newActivity.addCountry(places);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
    await newActivity.setCountries(place);
    res.json("Activity Added!");
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const activiti = await Activity.findAll({
      include: Country,
    });
    return res.json(activiti);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
