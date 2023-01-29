const Usuario = require("../models/Users");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {
            const { matricula, nome, email, senha, telefone, cargo, foto, criado_por } = req.body;

            const userMatriculaVerify = await Usuario.findByPk(matricula)
            const userEmailVerification = await Usuario.findOne({ where: {email}})

            console.log(userMatriculaVerify, userEmailVerification)
            if(!userMatriculaVerify && !userEmailVerification){

                const user = await Usuario.create({
                    matricula,
                    nome,
                    email,
                    senha,
                    telefone, 
                    cargo, 
                    foto, 
                    criado_por
                });
                
                const token = jwt.sign({ matricula: user.matricula, cargo: user.cargo}, process.env.SECRET,{
                    expiresIn: 500000
                })
                return res.status(201).json({user, token})
            } else {
                return res.status(400).json({message: "Já existe um usuário com essas credenciais"})
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({message: error})
        }
    },

    async index(req, res){
        try {
            const user_matricula = req.matricula;
            const user_cargo = req.cargo;
            
            if(user_cargo === "gestor"){
                const users = await Usuario.findAll({attributes: [
                    'matricula',
                    'nome',
                    'email',
                    'telefone',
                    'cargo'
                ],                   
                where:{
                    cargo: {
                        [Op.notLike]: "gestor"
                    }
                }
                })

                console.log(users)
                return res.json(users);
            }

        } catch (error) {
            return res.status(400).json({message: error})
        }

    },

    async login(req, res){
        try {
            const { email, senha } = req.body;
            
            const user = await Usuario.findOne({where: {email}})
            if(user){

                const isPasswordValid = await user.autenticate(senha);
                
                if(isPasswordValid){
                    const token = jwt.sign({ matricula: user.matricula, cargo: user.cargo}, process.env.SECRET,{
                        expiresIn: 500000
                    })
                    return res.status(200).json({ user, token })
                }else{
                    return res.status(400).json({message: "Credenciais incorretas"})
                }         
            }else{
                return res.status(400).json({message: "Credenciais incorretas"})
            }
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
}
