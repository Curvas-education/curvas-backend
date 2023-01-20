'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
        matricula: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cargo: {
          type: Sequelize.ENUM("gestor","diretor","professor","aluno"),
          allowNull: false
        },
        foto: {
          type: Sequelize.STRING,
          allowNull: true
        },
        criado_por: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "usuarios",
            key: "matricula",
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
