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

const getOneGarden = (req, res) => {
  const garden_id = req.params.id;
  console.log(garden_id);
  let getDesc = () => {
    return db.one(
      `SELECT locations.MAP_NUMBER, LOCATION_NAME, locations.place_desc FROM LOCATIONS WHERE MAP_NUMBER = '${garden_id}'`,
      req.body
    );
  };

  let getMedia = () => {
    return db.any(
      `SELECT media, media_url FROM locationsmedia WHERE location_id = '${garden_id}'`
    );
  };

  const callAPI = async () => {
    const desc = await getDesc();
    const media = await getMedia();
    return { desc, media };
  };

  callAPI()
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
  getOneGarden,
};
