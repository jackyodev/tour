var express = require("express");
var router = express.Router();

const { getAllBirds } = require("../queries/birdsQ");

/* GET a list of * plants List. */
router.get("/", getAllBirds);

module.exports = router;
