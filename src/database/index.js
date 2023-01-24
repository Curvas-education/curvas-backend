const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const Usuarios = require("../models/Usuario")

Usuarios.init(connection);

module.exports = connection; 