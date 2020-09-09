require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ limit: "1000mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./src/routes"));

const server = app.listen(process.env.PORT || 3008, () => {
  console.log(`🚀 Server running on port: ${process.env.PORT}`);
});

server.timeout = 60000;
