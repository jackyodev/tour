const { db } = require("../db/server.js");

const getAllGardens = (req, res) => {
  db.any(
    "SELECT MAP_NUMBER, LOCATION_NAME,THUMBNAIL_URL FROM LOCATIONS",
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

module.exports = {
  getAllGardens,
};

//"SELECT map_number, location_name, thumbnail_url, place_desc, string_agg(common_name, ', ') as plants FROM locations LEFT JOIN plantslocations on location_name = location GROUP BY locations.location_name, thumbnail_url, map_number, place_desc"//
