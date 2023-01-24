const express = require("express");
const UserController = require("../controllers/UserController")
const routes = express.Router();

routes.post("/create", UserController.create)
routes.get("/list", UserController.index)
routes.post("/login", UserController.login)

module.exports = routes;