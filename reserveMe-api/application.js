const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require('cookie-parser');


const app = express();

const db = require("./db");
const secret = process.env.TOKENSECRET || 'mysecret';
const token = require("./routes/tokenRoute");
const users = require("./routes/usersRoute");
const reservations = require("./routes/reservationsRoute");
const stores = require("./routes/storesRoute");
const login = require("./routes/user/loginRoute");
const register = require("./routes/user/registerRoute");
function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
  // actions = { updateAppointment: () => {} }
) {
  app.use(cors());
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyparser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/token", token());

  app.use("/api", users(db));
  app.use("/api", reservations(db));
  app.use("/api", stores(db));

  app.use("/login", login(db, secret)); 
  app.use("/register", register(db, secret)); 


  app.close = function() {
    return db.end();
  };

  return app;
};
