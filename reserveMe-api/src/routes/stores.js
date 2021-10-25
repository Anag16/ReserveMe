const router = require("express").Router();

module.exports = db => {
  router.get("/stores", (request, response) => {
    db.query(
      `
      SELECT
      store_id,
      location,
      capacity,
      safety_measures,
      dates,
      opening_hour,
      closing_hour,
      reservation_id,
      admin_id
    FROM stores
    `
    ).then(({ rows: days }) => {
      response.json(days);
    });
  });

  return router;
};
