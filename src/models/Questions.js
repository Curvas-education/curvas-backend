const { Model, DataTypes } = require("sequelize");

class Questoes extends Model {
    static init(sequelize){
        super.init({
            enunciado: DataTypes.STRING,
            alternativas: DataTypes.JSON,  
            alternativa_c: DataTypes.STRING,
            criado_por: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: "questoes"
        })
        
    }
    static associate(models){
        // this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
        // this.belongsTo(models.Users, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }
}

module.exports = Questoes;