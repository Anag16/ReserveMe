const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = db => {
  router.get("/reservations", withAuth, (request, response) => {
    db.query(
      `SELECT *
      FROM reservations`
    ).then(({ rows: reservations }) => {
      response.json(reservations);
    });
  })
  // reservations.reduce(
  //   (previous, current) => ({ ...previous, [current.id]: current }),
  //   {}
  // )

  router.put("/reservations/:id", (request, response) => {
    const { reservation_date, start_hour, start_minutes, end_hour, end_minutes } = request.body.reservation;
    db.query(
      `
      INSERT INTO reservations (reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id)
      VALUES ($1::date, $2::integer, $3::integer, $4::integer, $5::integer, $6::integer, $7::integer)
      ON CONFLICT (reservation_id)
      UPDATE SET reservation_date = $1::date, start_hour = $2::integer, start_minutes = #3::integer, end_hour = $4::integer, end_minutes = $5::integer
      `, [reservation_date, start_hour, start_minutes, end_hour, end_minutes]
    ).then(() => {
      response.status(204).json({})
    })
  })

  router.delete("/reservations/:id", (request, response) => {
    db.query(
      `DELETE FROM reservations
      WHERE reservation_id = $1::integer`,
      [request.params.id]
    ).then(() => {
      response.status(204).json({})
    })
  });
  return router;
}