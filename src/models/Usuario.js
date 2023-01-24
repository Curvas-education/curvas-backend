const { Model, DataTypes } = require("sequelize");
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
            cargo: DataTypes.STRING,
            foto: DataTypes.STRING,
            criado_por: DataTypes.INTEGER
        }, {
            sequelize,
            hooks: {
                beforeCreate: async (user) => {
                    if(user.senha){
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.senha = bcrypt.hashSync(user.senha, salt)
                    }
                },
                beforeUpdate: async (user) => {
                    if(user.senha){
                        const salt = await bcrypt.genSaltSync(10, 'a');
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

module.exports = Usuarios;