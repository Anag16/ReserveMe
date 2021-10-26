const router = require("express").Router();
const {checkPassword} = require('../../model/userModel')

module.exports = db => {
  router.post("/", (req, res) => {
    console.log("Data received");
        console.log(`${req.body.email} : ${req.body.password}`);
        //Get user id and pass it to users/maps/:userId
        checkPassword(db, req.body.email, req.body.password)
          .then(existingUser => {
            if (existingUser) {
              console.log('User found: ' + existingUser.user_id);
              res.send({
                token: 'test123'
              });
              // res.redirect(`/home`);
            } else {
              console.log('Invalid email/password');
              res.redirect('/login');
            }
          });
  });
  
  return router;
};
