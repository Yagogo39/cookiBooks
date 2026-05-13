const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Autor = sequelize.define('Autor', {
    id_autor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: { // Cambié apellido_paterno por apellido para que sea igual a tu SQL
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'autor', // Tal cual está en tu script
    timestamps: false   // Tu script no tiene campos de fecha, así que mejor apágalos
});

module.exports = Autor;