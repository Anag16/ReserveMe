const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/stores", withAuth, (request, response) => {
    // if this is stores list, only store_id, name, image, safety_measures, opening_hour and closing_hour are needed?
    db.query(
      `
      SELECT
  
      description,
      
      location,
      capacity,
      customer_count,
      reservation_capacity,
      safety_measures,
      opening_hour,
      closing_hour,
      admin_id
    FROM stores
    `
    ).then(({ rows: stores }) => {
      response.json(stores);
    });
  });

  router.get("/stores/:store_id", withAuth, (request, response) => {
    let store_id = request.params.store_id;
    db.query(
      `
      SELECT
      store_id,
      name,
      description,
      image,
      location,
      capacity,
      customer_count,
      reservation_capacity,
      safety_measures,
      opening_hour,
      closing_hour,
      admin_id
    FROM stores WHERE store_id = ${store_id}
    `
    ).then(({ rows: store }) => {
      response.json(store);
    });
  });

  return router;
};
