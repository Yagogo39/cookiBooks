const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Cliente = sequelize.define('cliente',{
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    municipio: DataTypes.STRING,
    estado: DataTypes.STRING
});

module.exports = Cliente;