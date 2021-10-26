const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/stores", withAuth, (request, response) => {
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
      admin_id
    FROM stores
    `
    ).then(({ rows: days }) => {
      response.json(days);
    });
  });

  return router;
};
