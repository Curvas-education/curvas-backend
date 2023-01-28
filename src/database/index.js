const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const Users = require("../models/Users")
const Questions = require("../models/Questions")
const Category = require("../models/Category")
const Discipline = require("../models/Discipline");
const Evaluation = require("../models/Evaluation");
const Class = require("../models/Class")

Users.init(connection);
Questions.init(connection);
Category.init(connection);
Discipline.init(connection);
Evaluation.init(connection);
Class.init(connection)


Users.associate(connection.models)

module.exports = connection; 