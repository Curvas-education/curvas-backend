const Discipline = require("../models/Discipline");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            const user_cargo = req.cargo;

            if(user_cargo === "coordenador" || user_cargo === "gestor"){
                const { titulo, ementa } = req.body;
                
                const findDiscipline = await Discipline.findOne({
                    where:{
                        titulo: {
                            [Op.like]: titulo.toLowerCase()
                        }
                    }
                })

                if(!findDiscipline){

                    const discipline = await Discipline.create({
                        titulo,
                        ementa
                    })

                    return res.status(400).json({ discipline })
                } else {
                    return res.status(400).json({message: "Já existe disciplina com esse titulo"})
                }

            } else {
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({message: error})
        }
    },

    async list(req, res){
        try {
            const disciplines = await Discipline.findAll();
            return res.status(200).json({ disciplines })
        } catch (error) {
            return res.status(400).json({message: error})
        }

    },

    async edit(req, res){
        try {
            const user_cargo = req.cargo;

            if(user_cargo === "coordenador" || user_cargo === "gestor"){
                const { titulo, ementa } = req.body;
                const id_discipline = req.params.id; 

                

                const updatedDiscipline = await Discipline.update({
                    titulo,ementa
                },{
                    where:{
                        id: id_discipline
                    } 
                }) 

                return res.status(200).json({updatedDiscipline})
            } else { 
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }
    },

    async delete(req, res){
        try {
            const user_cargo = req.cargo;

            if(user_cargo === "coordenador" || user_cargo === "gestor"){
                const id_discipline = req.params.id; 

                const deletedDiscipline = await Discipline.destroy(
{                    where:{
                        id: id_discipline
                    } }
                ) 

                return res.status(200).json({message: "Disciplina deletada com sucesso"})
            } else { 
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
}
