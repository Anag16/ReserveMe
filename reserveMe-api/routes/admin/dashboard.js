const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/admin/:store_id", withAuth, (request, response) => {
    const store_id = request.params.store_id;
    db.query(
      `
      SELECT
      stores.*,
    FROM stores
    JOIN admins ON stores.admin_id = admins.admin_id
    WHERE store_id = ${store_id} && admin_id = ${admin_id}
    GROUP BY store_id
    `
    ).then(({ rows: store }) => {
      response.json(store);
      response.send("Received")
    });
  });

  //reservation_capacity = number of reservations allowed or number of reservations used??
  router.put("/admin/:store_id", (request, response) => {
    const { name, description, image, location, capacity, customer_count, reservation_capacity, safety_measures, opening_hour, closing_hour, admin_id } = request.body.store;
    db.query(
      `INSERT INTO stores
      (name, description, image, location, capacity, customer_count, reservation_capacity, safety_measures, opening_hour, closing_hour)
      VALUES
      ($1::text, $2::text, $3::text, $4::text, $5::integer, $6::integer, $7::integer, $8::text, $9::integer, $10::integer, $11::boolean)
      ON CONFLICT () DO
      UPDATE SET name = $1::text, description = $2::text, image = $3::text, location = $4::text, capacity = $5::integer, customer_count = $6::integer, reservation_capacity = $7::integer, safety_measures = $8::text, opening_hour = $9::integer, closing_hour = $10::integer, admin_id = $11::integer)`,
      [name, description, image, location, capacity, customer_count, reservation_capacity, safety_measures, opening_hour, closing_hour, admin_id]
    )
      .then(({rows: store}) => {
        response.json(store);
        response.send("Updated")
      })
  })

  return router;
};
