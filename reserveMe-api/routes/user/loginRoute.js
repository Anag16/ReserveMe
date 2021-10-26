const router = require("express").Router();
const {checkPassword} = require('../../model/userModel')

module.exports = db => {
  router.post("/", (req, res) => {
    console.log("Data received");
        console.log(`${req.body.credentials.email} : ${req.body.credentials.password}`);
        checkPassword(db, req.body.credentials.email, req.body.credentials.password)
          .then(existingUser => {
            if (existingUser) {
              console.log('User found: ' + existingUser.user_id);
              res.send({
                token: 'test123'
              });
            } else {
              console.log('Invalid email/password');
              res.send('Invalid email/password');
            }
          });
  });
  
  return router;
};
