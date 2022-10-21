const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

require("../db/connection");

const User = require("../model/userSchema");

// homepage route
// router.get("/", (req, res) => {
//   res.send("Hello from homepage");
// });

// dashboard route
router.post("/dashboard", (req, res) => {

    const { authToken } = req.body;

    if(authToken){
      const verifyToken = jwt.verify( authToken.authToken, process.env.SECRET_KEY);
  
      User.findOne({_id: verifyToken._id, "tokens.token" : authToken.authToken })
      .then((rootUser) => {
        return res.status(200).json({ message: "Welcome to dashboard", status: 200, rootUser });
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).send(`Unauthorised: ${err}`)
      })
    }
});

// signup route
router.post("/v1/signup", (req, res) => {

  const { firstName, lastName, photoUrl, email, password } = req.body;

  if (!firstName || !lastName || !photoUrl || !email || !password)
    return res.status(422).json({ error: "Please fill the field properly", status: 422 });

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist)
        return res
          .status(409)
          .json({ error: "you are already registerd, Please login" });

      const user = new User({
        firstName,
        lastName,
        photoUrl,
        email,
        password,
      });

      user
        .save()
        .then(() => {
          return res
            .status(201)
            .json({ message: "user registerd successfully!" });
        })
        .catch((error) => {
          return res.status(500).json({ error: "Failed to register" });
        });
    })
    .catch((error) => console.log(error));
});

// login route
router.post("/v1/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(422).json({ error: "Please fill the data" });

  User.findOne({ email: email })
    .then((userLogin) => {
      if (userLogin) {

        bcrypt
          .compare(password, userLogin.password)
          .then((isMatch) => {
            if (!isMatch)
              return res.status(401).json({ error: "Invalid credentials" });
            else{
              userLogin.generateAuthToken().then((token) => {
                return res.cookie().json({ message: token, status: 200 });
              }); 
            }
          })
          .catch((error) => {
            return res.status(401).json({ error: "Failed to login" });
          });
          
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: "Failed to login" });
    });
});

module.exports = router;
