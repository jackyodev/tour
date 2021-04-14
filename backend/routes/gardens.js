var express = require("express");
var router = express.Router();

const { getAllGardens, getOneGarden } = require("../queries/gardensQ");

/* GET a list of * Gardens Location. */
router.get("/:id", getOneGarden);
router.get("/", getAllGardens);

module.exports = router;
