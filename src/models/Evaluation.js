const { Model, DataTypes } = require("sequelize");

class Avaliacao extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            instrucao: DataTypes.STRING,
            turma: DataTypes.INTEGER,  
            disciplina: DataTypes.INTEGER,
            data: DataTypes.DATE,
        }, {
            sequelize,
            modelName: "avaliacoes",
            timestamps: false
        })
        
    }
    static associate(models){
    }
}

module.exports = Avaliacao; 
