const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/admin/:store_id/counter", withAuth, (request, response) => {
    const store_id = request.params.store_id;
    db.query(
      `
      SELECT
      store_id,
      name,
      
      location,
      capacity,
      customer_count,
      reservation_capacity,

      is_admin
    FROM stores WHERE store_id = ${store_id}
    `
    ).then(({ rows: store }) => {
      response.json(store);
    });
  });

  router.get("/admin/counter", withAuth, (request, response) => {

    db.query(
      `
      SELECT
      capacity, customer_count, reservation_capacity
      FROM stores
      JOIN admins ON admins.admin_id = stores.admin_id
      JOIN users ON admins.user_id = users.user_id
      `
    ).then(() => {
      response.send('Counter page here');
    });
  });

  /*
  router.put("/admin/counter", (request, response) => {
    const {store_id, customer_count, admin_id } = request.body.appointmentData;
    db.query(
      `
      INSERT INTO stores (store_id, customer_count)
      VALUES ($1::integer, $2::integer, $3::integer)
      `, [store_id, customer_count, admin_id]
      // ON CONFLICT (store_id) DO
      // UPDATE SET customer_count = $2::integer
    ).then(() => {
      response.status(200).send('Count updated');
    });
  })
  */
  return router;
};
