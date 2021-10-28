const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/stores", withAuth, (request, response) => {
    db.query(
      `
      SELECT
      store_id,
      name,
      description,
      image,
      location,
      capacity,
      safety_measures,
      dates,
      opening_hour,
      closing_hour,
      admin_id
    FROM stores
    `
    ).then(({ rows: stores }) => {
      response.json(stores);
    });
  });

  return router;
};
