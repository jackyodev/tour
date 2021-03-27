var express = require("express");
var router = express.Router();

const { getAllBirds } = require("../queries/birds");

/* GET a list of * birds. */
router.get("/", getAllBirds);

module.exports = router;
