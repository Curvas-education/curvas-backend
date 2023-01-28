const express = require("express");
const DisciplineController = require("../controllers/DisciplineController");
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware,  DisciplineController.create);
routes.get("/list", UserMiddleware, DisciplineController.delete);
routes.put("/:id/edit", UserMiddleware, DisciplineController.edit);
routes.delete("/:id/delete", UserMiddleware, DisciplineController.delete);

module.exports = routes;