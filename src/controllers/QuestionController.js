const Questions = require("../models/Questions");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            // Verificar os acessos : gestor 
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;

            if (user_cargo === "professor" || user_cargo === "coordenador" || user_cargo === "gestor") {
                const { enunciado, alternativas, alternativa_c } = req.body;

                const question = await Questions.create({
                    enunciado, alternativas, alternativa_c, criado_por: user_matricula
                })

                return res.status(200).json({ question })

            } else {
                return res.status(400).json({ message: "Você não tem permissão para acessar essa rota" })
            }


        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async view(req, res) {
        try {
            const questionId = req.params.id

            const question = await Questions.findOne({
                where: {
                    id: questionId
                }
            });

            return res.status(200).json({ question })
        } catch (error) {
            return res.status(400).json({ message: error ?? "Ocorreu um erro ao tentar visualizar a questão" });
        }
    },

    async list(req, res) {
        try {
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;

            if (user_cargo === "professor" || user_cargo === "coordenador" || user_cargo === "gestor") {

                const questions = await Questions.findAll({
                    where: {
                        criado_por: {
                            [Op.like]: user_matricula
                        }
                    }
                })

                return res.status(200).json({ questions })

            } else {

                return res.status(400).json({ message: "Você não tem permissão para acessar essa rota" })

            }


        } catch (error) {
            return res.status(400).json({ message: error })
        }

    },

    async edit(req, res) {
        try {
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;
            const question_id = req.params.id;

            const question = await Questions.findOne({
                where: {
                    id: {
                        [Op.like]: question_id
                    },
                    criado_por: {
                        [Op.like]: user_matricula
                    }
                }
            })

            if (question) {
                const { enunciado, alternativas, alternativa_c } = req.body;

                const updatedQuestion = await Questions.update({
                    enunciado, alternativas, alternativa_c
                }, {
                    where: {
                        id: question_id
                    }
                })

                return res.status(200).json({ message: "Questão atualizada com sucesso", updatedQuestion })

            } else {

                return res.status(400).json({ message: "Questão não encontrada" })

            }


        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async delete(req, res) {
        try {
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;
            const question_id = req.params.id;

            const question = await Questions.findByPk(question_id)

            if (question) {

                const deletedQuestion = await Questions.destroy({
                    where: {
                        criado_por: {
                            [Op.like]: user_matricula
                        },
                        id: {
                            [Op.like]: question_id
                        }
                    }
                })

                return res.status(200).json({ message: "Questão deletada com sucesso" })
            } else {

                return res.status(400).json({ message: "Questão não encontrada" })
            }
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}
