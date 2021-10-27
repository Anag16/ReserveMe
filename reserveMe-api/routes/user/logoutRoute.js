const router = require("express").Router();

module.exports = (db, secret) => {
  router.post("/", (req, res) => {
    console.log('Clearing cookies');
    res.clearCookie("token");
    res.status(200).send("Cookies cleared.");
  });
  
  return router;
};
