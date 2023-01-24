const Usuario = require("../models/Usuario");
module.exports = {
    async create(req, res) {
        try {
            const { matricula, nome, email, senha, telefone, cargo, foto, criado_por } = req.body;

            const userMatriculaVerify = await Usuario.findByPk(matricula)
            const userEmailVerification = await Usuario.findOne({ where: {email}})
            
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

                return res.status(201).json({user})

            } else {
                return res.status(400).json({message: "Já existe um usuário com essas credenciais"})
            }

        } catch (error) {
            return res.status(404).json({message: error})
        }
    },

    async index(req, res){
        try {
            const users = await Usuario.findAll()

            return res.json(users);
        } catch (error) {
            return res.status(404).json({message: error})
        }

    },

    async login(req, res){
        try {
            const { email, senha } = req.body;
            
            const findUser = await Usuario.findOne({where: {email}})
            if(findUser){
                const user = Usuario.findOne({
                    where: {
                     email // user email
                    }
                    }).then(function (user) {
                        if(!user.validPassword(senha)){
                            console.log(true)
                        }
                    })           
                return res.status(200).json({ user })
            }else{
                return res.status(404).json({message: "Email não encontrado"})
            }
        } catch (error) {
            return res.status(404).json({message: error})
        }
    }
}
