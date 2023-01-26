const express = require("express");
const QuestionController = require("../controllers/QuestionController")
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware,  QuestionController.create)
routes.get("/list", UserMiddleware, QuestionController.list)
// routes.put("/edit", )
// routes.delete("/delete", )

module.exports = routes;