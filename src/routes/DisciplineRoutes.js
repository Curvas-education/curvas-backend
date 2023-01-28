const express = require("express");
const DisciplineController = require("../controllers/DisciplineController");
const UserMiddleware = require("../middlewares/UsuarioAuth");
const routes = express.Router();

routes.post("/create", UserMiddleware,  )
routes.get("/list", UserMiddleware, )
routes.put("/:id/edit", UserMiddleware,  )
routes.delete("/:id/delete", UserMiddleware, )

module.exports = routes;