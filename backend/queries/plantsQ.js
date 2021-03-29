const { dataExist } = require("../functions/dataChecker");
const { db } = require("../db/server.js");

const getAllPlants = (req, res) => {
  db.any("SELECT * from plants", req.body)
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

const getPlantsByParamsMonth = async (req, res) => {
  const month = req.params.month;

  try {
    const sql = await db.any(
      `SELECT month_name, plantsmonths.id, common_name FROM months RIGHT JOIN plantsmonths ON months.month_number = plantsmonths.month_number WHERE months.month_name = '${month}'`,
      req.body
    );
    const data = await sql;
    const resp = (data) => {
      if (dataExist(data)) {
        return res.status(200).json({
          status: 200,
          message: "success",
          data: data,
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Please check month spelling",
        });
      }
    };

    await resp(data);
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error,
    });
  }
};

module.exports = {
  getAllPlants,
  getPlantsByParamsMonth,
};
