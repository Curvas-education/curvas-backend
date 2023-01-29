const Class = require("../models/Class");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            const user_cargo  = req.cargo;
            if(user_cargo === "coordenador" || user_cargo === "gestor"){

                const { titulo } = req.body;

                const turma = await Class.create({
                    titulo
                })

                return res.status(200).json({ turma })


            } else {
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }

        } catch (error) {
            return res.status(400).json({message: error})
        }
    },

    async list(req, res){
        try {
            const user_cargo  = req.cargo;
            if(user_cargo === "coordenador" || user_cargo === "gestor" || user_cargo === "professor"){

                const classes = await Class.findAll()

                return res.status(200).json({ classes })


            } else {
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }

    },

    async edit(req, res){
        try {

        } catch (error) {
            return res.status(400).json({message: error})
        }
    },

    async delete(req, res){
        try {

        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
}
