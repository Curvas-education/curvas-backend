const Category = require("../models/Category");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            const user_cargo = req.cargo;
            
            if(user_cargo === "professor" || user_cargo === "coordenador" || user_cargo === "gestor"){
                const { titulo, disciplina, descricao } = req.body;
                console.log(titulo, disciplina, descricao)
                const category = await Category.create({ 
                    titulo,
                    disciplina,
                    descricao
                })

                return res.status(200).json({category})

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
            const categories = await Category.findAll()

            return res.status(200).json({categories})

        } catch (error) {
            return res.status(400).json({message: error})
        }

    },

    async edit(req, res){
        try {
            const user_cargo = req.cargo;

            if(user_cargo === "professor" || user_cargo === "coordenador" || user_cargo === "gestor"){
                const { titulo, disciplina, descricao } = req.body;
                const id = req.params.id

                const updatedCategory = await Category.update({ 
                    titulo,
                    disciplina,
                    descricao
                },{
                    where: {
                        id
                    }
                })

                return res.status(200).json({updatedCategory})

            } else {
                return res.status(400).json({message: "Você não tem permissão para acessar essa rota"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }
    },

    async delete(req, res){
        try {
            const category_id = req.params.id;

            const category = await Category.findByPk(category_id)

            if(category){

                const deletedCategory = await Category.destroy({
                    where:{
                        id: {
                            [Op.like]: category_id
                        }
                    }
                })

                return res.status(200).json({message: "Categoria deletada com sucesso"})
            } else {
                
                return res.status(400).json({message: "Categoria não encontrada"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
}
