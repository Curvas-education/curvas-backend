const express = require("express");
const QuestionController = require("../controllers/QuestionController")
const routes = express.Router();

routes.post("/create", QuestionController.create)
routes.get("/list", UserController.index)
routes.put("/edit", )
routes.delete("/delete", )

module.exports = routes;