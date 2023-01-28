const { Model, DataTypes } = require("sequelize");

class Categoria extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            disciplina: DataTypes.INTEGER,
            descricao: DataTypes.STRING
        }, {
            sequelize,
            modelName: "categorias"
        })
        
    }
    static associate(models){
    }
}

module.exports = Categoria;