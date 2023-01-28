const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware, CategoryController.create )
routes.get("/list", UserMiddleware, CategoryController.list )
routes.put("/:id/edit", UserMiddleware,  CategoryController.edit )
routes.delete("/:id/delete", UserMiddleware, CategoryController.delete )

module.exports = routes;