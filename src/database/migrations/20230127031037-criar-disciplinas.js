'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('disciplinas', { 
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
      ementa: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

