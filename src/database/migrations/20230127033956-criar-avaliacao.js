'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('avaliacoes', {
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
      instrucao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "turmas",
          key: "id",
        }
      },
      disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "disciplinas",
          key: "id",
        }
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      }
      });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
