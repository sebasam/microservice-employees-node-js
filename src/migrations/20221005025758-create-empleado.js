'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empleados', {
      codigo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nif: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      codigo_departamento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departamentos',
          key: 'codigo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empleados');
  }
};