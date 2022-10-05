'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departamentos', [
      {
        nombre: 'Ventas',
        presupuesto: 10000000,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null
      },
      {
        nombre: 'Mantenimiento',
        presupuesto: 15000000,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null
      },
      {
        nombre: 'Administrativo',
        presupuesto: 18000000,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null
      },
      {
        nombre: 'Desarrollo',
        presupuesto: 30000000,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null
      },
      {
        nombre: 'Recursos Humanos',
        presupuesto: 30000000,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
