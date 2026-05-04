const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Autor = sequelize.define('autor',{
    autor:{
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING
    }
});

module.exports = Autor;