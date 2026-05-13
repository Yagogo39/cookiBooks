const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Libro = sequelize.define('Libro', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edicion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2) 
    },
    existencias: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    stock_minimo: {
        type: DataTypes.INTEGER,
        defaultValue: 5
    }
}, {
    tableName: 'libros',
    timestamps: true
});

module.exports = Libro;