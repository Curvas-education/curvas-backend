const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const Users = require("../models/Users")
const Questions = require("../models/Questions")

Users.init(connection);
Questions.init(connection);

Users.associate(connection.models)

module.exports = connection; 