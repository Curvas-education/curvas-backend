'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('categorias', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "disciplinas",
          key: "id",
        }
      },
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('categorias');

  }
};

turma_aluno 
