const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Country, Activity } = require("../db");

const allCountries = async () => {
  try {
    let result = await Country.findAll({
      include: Activity,
    });
    return result;
  } catch (error) {
    console.log("all", error);
  }
};
const oneCountry = async (name) => {
  try {
    let littleName = name.toLowerCase();
    let oneResult = await Country.findOne({
      where: {
        name: littleName,
      },
      include: Activity,
    });

    return oneResult;
  } catch (error) {
    console.log("One", error);
  }
};

const idCountry = async (id) => {
  try {
    let idResult = await Country.findOne({
      where: { id: id },
      include: Activity,
    });
    console.log(idResult);
    return idResult;
  } catch (error) {
    console.log("ID", error);
  }
};
module.exports = {
  allCountries,
  oneCountry,
  idCountry,
};
