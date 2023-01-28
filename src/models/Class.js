const { Model, DataTypes } = require("sequelize");

class Turma extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING
        }, {
            sequelize,
            modelName: "turmas"
        })
        
    }
    static associate(models){
    }
}

module.exports = Turma;