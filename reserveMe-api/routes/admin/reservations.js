const router = require("express").Router();
const withAuth = require('../../middleware');

module.exports = db => {
  router.get("/admin/reservations", withAuth, (request, response) => {
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

  return router;
}