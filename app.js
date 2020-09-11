require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./src/routes"));

const server = app.listen(process.env.PORT || 3008, () => {
  console.log(`🚀 Server running on port: ${process.env.PORT}`);
});

server.timeout = 60000;
