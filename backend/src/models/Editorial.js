const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Editorial = sequelize.define('editorial', {
    nombre: DataTypes.STRING
});

module.exports = Editorial;