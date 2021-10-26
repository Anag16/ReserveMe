const router = require("express").Router();
const withAuth = require('../middleware');

module.exports = () => {
  router.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });

  return router;
};
