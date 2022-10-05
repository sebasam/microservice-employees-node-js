const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('employees', 'postgres', 'Clave1234', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize