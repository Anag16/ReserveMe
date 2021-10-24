const PORT = 3003;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//middleware 
app.use(morgan('dev'));
// app.use(cors()) - to use for later

app.get("/register", (request, response) => {
  // const userID = request.session.userID;
  // if (userID) {
    // return response.redirect("/");
  // }
  // const template = { email: request.session.email };
  response.render("Register", template);
});

//Registers user in userDatabase if email is not already used
app.post("/register", (request, response) => {
  // const { email, password } = request.body;
  // const user = findUser(userDatabase, email);
  // if (email === "" || password === "" || user) {
    // return response.redirect(400, "/register");
  // }
  //Creates random string of 6 alphanumericals. Not in a variable because it would make all IDs identical
// const userID = identity();
  //Hashes password and encrypts cookies for security
  // const salt = bcrypt.genSaltSync(10);
  // const hashed = bcrypt.hashSync(password, salt);
  // const newUser = { userID, email, password: hashed };
  // userDatabase[userID] = newUser;
  // request.session.email = email;
  // request.session.userID = userID;
  response.redirect("/");
});

app.get("/login", (request, response) => {
  // const userID = request.session.userID;
  // if (userID) {
    // return response.redirect("/");
  // }
  // const template = { email: request.session.email };
  response.render("Login", template);
});

app.post("/login", (request, response) => {
  // const { email, password } = request.body;
  // const user = findUser(userDatabase, email);
  //If email and password are correct, redirects to /urls
  // if (user && bcrypt.compareSync(password, user.password)) {
  //   request.session.email = email;
  //   request.session.userID = user.userID;
    // return response.redirect("/");
  // }
  response.redirect("/login");
})

//Deletes all cookies
app.post("/logout", (request, response) => {
  request.session = null;
  response.redirect("/");
});

// HELPERS
// const userDatabase = {};

// const identity = function() {
//   return Math.random().toString(36).slice(2, 8);
// }

//Takes in email and looks through userDatabase to find if it's already used, then returns it. If not, it returns null
// const findUser = function(userDatabase, email) {
//   for (const user in userDatabase) {
//     if (email === userDatabase[user].email) {
//       return userDatabase[user];
//     }
//   }
//   return null;
// };


app.listen(PORT, console.log(`Server is listening on port ${PORT}`));