const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = (db) => {
  router.get("/users", withAuth, (request, response) => {
    db.query(
      `SELECT
        user_id,
        email,
        password,
        name,
        phone,
        is_admin
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