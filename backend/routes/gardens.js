var express = require("express");
var router = express.Router();

const { getAllGardens } = require("../queries/gardensQ");

/* GET a list of * Gardens Location. */
router.get("/*", getAllGardens);

module.exports = router;
