const router = require("express").Router();

module.exports = db => {
  router.get("/reservations", (request, response) => {
    db.query(
      `SELECT *
      FROM reservations`
    ).then(({ rows: reservations }) => {
      response.json(
        reservations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  })

  router.put("/reservations/:id", (request, response) => {
    const { reservation_date, start_time, end_time } = request.body.reservation;
    db.query(
      `
      INSERT INTO reservations (reservation_date, start_time, end_time, user_id, store_id)
      VALUES ($1::date, $2::timez, $3::timez, $4::integer, $5::integer)
      ON CONFLICT (reservation_id)
      UPDATE SET reservation_date = $1::date, start_time = $2::text, end_time = $3::text
      `, [reservation_date, start_time, end_time]
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