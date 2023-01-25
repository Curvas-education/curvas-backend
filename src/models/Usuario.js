const { Model, DataTypes } = require("sequelize");
require('dotenv').config()
const bcrypt = require("bcrypt");

class Usuarios extends Model {
    static init(sequelize){
        super.init({
            matricula: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,  
            senha: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
            cargo: DataTypes.ENUM(["gestor", "diretor", "professor", "aluno"]),
            foto: DataTypes.STRING,
            criado_por: DataTypes.INTEGER
        }, {
            sequelize,
            hooks: {
                beforeCreate: async (user) => {
                    if(user.senha){
                        const SALT_BCRYPT = process.env.SALT_BCRYPT;
                        
                        const salt = bcrypt.genSaltSync(10, SALT_BCRYPT);
                        console.log(salt)
                        user.senha = bcrypt.hashSync(user.senha, salt)
                    }
                },
                beforeUpdate: async (user) => {
                    if(user.senha){
                        const salt = await bcrypt.genSaltSync(10, process.env.SALT_BCRYPT);
                        user.senha = bcrypt.hashSync(user.senha, salt)
                    }
                }
            },
            instanceMethods: {
                async validPassword(senha) {
                    return await bcrypt.compare(senha, this.senha);
                }
            }
        })
        
    }

    static associate(models){
        // this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
        // this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }
}

Usuarios.prototype.autenticate = async function(senha){
    return await bcrypt.compare(senha, this.senha)
}

module.exports = Usuarios;