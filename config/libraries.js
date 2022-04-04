const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const cookieParser = require("cookie-parser");

function initLibraries() {
  const server = express();
  server.use(cookieParser());
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(express.static(path.join(__dirname)));
  dotenv.config();
  return server;
}

module.exports = initLibraries;
