const { dataExist } = require("../functions/dataChecker");
const { db } = require("../db/server.js");

const getAllPlants = (req, res) => {
  db.any(
    `SELECT plants.plant_id, plants.common_name, plants.plant_species_name, STRING_AGG(plantsphotos.photo_url, ', ')  AS  photo_urls from plants
LEFT JOIN plantsphotos ON plants.plant_id = plantsphotos.plant_id GROUP BY plants.plant_id,plants.common_name, plants.plant_species_name ORDER BY plants.plant_id ASC
`,
    req.body
  )
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

const getOnePlant = (req, res) => {
  const plants_id = req.params.id;
  db.one(
    `SELECT plants.plant_id, plants.plant_species_name, plants.common_name, plant_desc, STRING_AGG(photo_url, ',') as photo_url 
FROM plants LEFT JOIN plantsphotos as photos 
ON plants.plant_id = photos.plant_id 
WHERE plants.plant_id = '${plants_id}'
GROUP BY plants.plant_id,plants.plant_species_name, plants.common_name, plant_desc`,
    req.body
  )
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
      `SELECT plantsphotos.plant_id, plantsphotos.common_name, plant_species_name, STRING_AGG(photo_url,', ') as photo_urls from plantsphotos INNER JOIN (SELECT month_name, common_name
FROM months RIGHT JOIN plantsmonths ON months.month_number = plantsmonths.month_number 
WHERE months.month_name = '${month}') AS table2 ON plantsphotos.common_name = table2.common_name GROUP BY plantsphotos.common_name, plantsphotos.plant_id,plant_species_name
`,
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
  getOnePlant,
};
