'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('questoes', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      enunciado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alternativas: {
        type: Sequelize.JSON,
        allowNull: false
      },
      alternativa_c: {
        type: Sequelize.STRING,
        allowNull: true
      },
      criado_por: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "matricula",
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('questoes');
  }
};
