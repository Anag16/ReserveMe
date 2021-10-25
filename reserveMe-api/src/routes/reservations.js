const router = require("express").Router();

module.exports = db => {
  router.get("/reservations", (request, response) => {
    db.query(`SELECT * FROM reservations`).then(({ rows: interviewers }) => {
      response.json(
        interviewers.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });
  
  return router;
};
