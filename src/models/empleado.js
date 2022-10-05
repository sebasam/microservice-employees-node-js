'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Empleado.belongsTo( models.Departamento ,{
        foreignKey: 'codigo',
        sourceKey: 'codigo_departamento'
      } ) 
    }
  }
  Empleado.init({
    nif: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    codigo_departamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empleado',
    paranoid: true
  });
  return Empleado;
};