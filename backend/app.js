const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const cors = require("cors");

dotenv.config({ path: "./config.env" });


const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db/connection");

const User = require("./model/userSchema");

// routes
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

// MiddleWare
const middleWare = (req, res, next) => {
  console.log("MiddleWare");
  next();
};

if(process.env.NODE_ENV === "production"){
  app.use(express.static("frontend/dist"));
}

app.listen(`${PORT}`, () => {
  console.log("Server started " + `localhost:${PORT}`);
});
