const sequelize = require("../config/connection");
const { College, Conference, Player } = require("../models");

const userData = require("./userData.json");
const reviewData = require("./reviewData")