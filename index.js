const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(bodyparser.json());

app.use(cors());

module.exports = app;
