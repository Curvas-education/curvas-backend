const Class = require("../models/Class");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            if(user_cargo === "professor" || user_cargo === "coordenador" || user_cargo === "gestor"){


            } else {
                return res.status(404).json({message: "Você não tem permissão para acessar essa rota"})
            }

        } catch (error) {
            return res.status(404).json({message: error})
        }
    },

    async list(req, res){
        try {

        } catch (error) {
            return res.status(404).json({message: error})
        }

    },

    async edit(req, res){
        try {

        } catch (error) {
            return res.status(404).json({message: error})
        }
    },

    async delete(req, res){
        try {

        } catch (error) {
            return res.status(404).json({message: error})
        }
    }
}
