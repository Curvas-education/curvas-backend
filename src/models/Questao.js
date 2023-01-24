const { Model, DataTypes } = require("sequelize");

class Questoes extends Model {
    static init(sequelize){
        super.init({
            enunciado: DataTypes.STRING,
            alternativas: DataTypes.STRING,  
            alternativa_c: DataTypes.STRING,
            criado_por: DataTypes.INTEGER
        }, {
            sequelize
        })
        
    }

    static associate(Questoes){
        // this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
        // this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }
}

module.exports = Questoes;