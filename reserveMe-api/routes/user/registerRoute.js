const router = require("express").Router();
const {registerUser, checkPassword} = require('../../model/userModel')

module.exports = db => {
  router.post("/", (req, res) => {
    let email = req.body.userData.email;
    let password = req.body.userData.password;
    let name = req.body.userData.name;
    let phone = req.body.userData.phone;
    registerUser(db, email, password, phone, name)
    .then(() => {
        //Send token
        res.send('New user added');
    })
    .catch(err => {
        res.status(500).send("Error registering new user please try again.");
        console.error(err);
    });
  });
  return router;
};