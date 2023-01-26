const Questions = require("../models/Questions");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            // Verificar os acessos : gestor 
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;
            if(user_cargo === "gestor"){
                const {enunciado, alternativas, alternativa_c } = req.body;
                
                const question = await Questions.create({
                    enunciado, alternativas, alternativa_c, criado_por: user_matricula
                })

                return res.status(200).json({question})

            } else {
                return res.status(404).json({message: "Você não tem permissão para acessar essa rota"})
            }
            
            
        } catch (error) {
            return res.status(404).json({message: error})
        }
    },

    async list(req, res){
        try {
            const user_matricula = req.matricula;
            console.log(user_matricula)
            const questions = await Questions.findAll({
                where: {
                    criado_por:{
                        [Op.like]: user_matricula
                    }
                }
            })

            return res.status(200).json({ questions })

        } catch (error) {
            return res.status(404).json({message: error})
        }

    }
}
