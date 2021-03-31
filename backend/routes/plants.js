var express = require("express");
var router = express.Router();

const { getAllPlants, getPlantsByParamsMonth } = require("../queries/plantsQ");

/* GET a list of * plants. */
router.get("/", getAllPlants);
router.get("/months/:month", getPlantsByParamsMonth);

module.exports = router;
