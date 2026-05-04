const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Categoría = sequelize.define('categoria',{
    nombre: DataTypes.STRING
});

module.exports = Categoría;