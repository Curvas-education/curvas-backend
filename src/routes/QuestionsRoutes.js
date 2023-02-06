const express = require("express");
const QuestionController = require("../controllers/QuestionController")
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware, QuestionController.create)
routes.get("/list", UserMiddleware, QuestionController.list)
routes.get("/view/:id", UserMiddleware, QuestionController.view)
routes.put("/:id/edit", UserMiddleware, QuestionController.edit)
routes.delete("/:id/delete", UserMiddleware, QuestionController.delete)

module.exports = routes;