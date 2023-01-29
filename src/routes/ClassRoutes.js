const express = require("express");
const ClassController = require("../controllers/ClassController");
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware, ClassController.create )
routes.get("/list", UserMiddleware, ClassController.list )
routes.put("/:id/edit", UserMiddleware,  ClassController.edit )
routes.delete("/:id/delete", UserMiddleware,  ClassController.delete ) 

module.exports = routes;