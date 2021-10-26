const router = require("express").Router();
const {registerUser, checkPassword} = require('../../model/user')

module.exports = db => {
  router.post("/", (req, res) => {
    registerUser(db, req.body)
    .then(() => {
        res.send('New user added');
    })
    .catch(err => {
        res.status(500).send("Error registering new user please try again.");
        console.error(err);
    });
  });
  return router;
};