const express = require("express");
const UserController = require("../controllers/UserController");
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserController.create)
routes.get("/list", UserMiddleware, UserController.index)
routes.post("/login", UserController.login)
routes.put("/edit/:user_id", UserMiddleware)
routes.delete("/delete/:user_id", UserMiddleware)

module.exports = routes;