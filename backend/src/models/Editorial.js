const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Editorial = sequelize.define('Editorial', {
    nombre: DataTypes.STRING
});

module.exports = Editorial;