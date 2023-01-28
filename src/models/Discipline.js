const { Model, DataTypes } = require("sequelize");

class Disciplina extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            ementa: DataTypes.STRING
        }, {
            sequelize,
            modelName: "disciplinas"
        })
        
    }
    static associate(models){
    }
}

module.exports = Disciplina;