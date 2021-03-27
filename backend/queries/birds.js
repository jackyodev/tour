const { db } = require("../db/server.js");

const getAllBirds = (req, res, next) => {
  db.any("SELECT * from birds", req.body)
    .then((result) => {
      res.status(200).json({
        status: 200,
        message: "success",
        data: result,
      });
    })
    .catch((e) => {
      status: 400;
      error: e.message;
    });
};

module.exports = {
  getAllBirds,
};
