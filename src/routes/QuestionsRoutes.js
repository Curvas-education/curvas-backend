const express = require("express");
const QuestionController = require("../controllers/QuestionController")
const routes = express.Router();

routes.post("/:user_id/create", QuestionController.create)
routes.get("/list", UserController.index)



module.exports = routes;