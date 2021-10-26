const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (request, response) => {
    db.query(
      `SELECT
        user_id,
        email,
        fullname,
        phone,
        user_type
      FROM users`
    ).then(({ rows: users }) => {
      response.json(
        users.reduce(
          (previous, current) => ({ ...previous, [current.user_id]: current }),
          {}
        )
      );
    });
  });
  return router;
}