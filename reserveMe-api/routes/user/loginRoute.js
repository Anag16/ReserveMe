const router = require("express").Router();
const jwt = require('jsonwebtoken');
const {checkPassword} = require('../../model/userModel');
const withAuth = require('../../middleware');

module.exports = (db, secret) => {
  router.post("/", (req, res) => {
    console.log("Data received");
        let email = req.body.credentials.email;
        let password = req.body.credentials.password;
        checkPassword(db, email, password)
          .then(existingUser => {
            if (existingUser) {
              console.log('User found: ' + existingUser.user_id);
                // Issue token
                const payload = { email };
                const token = jwt.sign(payload, secret, {
                  expiresIn: '1h'
                });
                res.cookie('token', token, { httpOnly: false, sameSite: 'lax' });
                res.cookie('user_id', existingUser.user_id, { httpOnly: false, sameSite: 'lax' });
                res.cookie('user_fullname', existingUser.fullname, { httpOnly: false, sameSite: 'lax' })
                  .sendStatus(200);

            } else {
              console.log('Invalid email/password');
              res.send('Invalid email/password');
            }
          });
  });
  
  return router;
};
