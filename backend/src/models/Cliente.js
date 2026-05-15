const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_cliente' // <-- Fuerza a usar minúsculas exactas en la BD
    },
    nombre_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nombre_apellido' // <-- Fuerza a que busque exactamente esto en minúsculas
    },
    calle: { type: DataTypes.STRING, field: 'calle' },
    colonia: { type: DataTypes.STRING, field: 'colonia' },
    municipio: { type: DataTypes.STRING, field: 'municipio' },
    estado: { type: DataTypes.STRING, field: 'estado' }
}, {
    tableName: 'Cliente', // <-- Si en el script de Windows dice "CREATE TABLE Cliente", se queda así
    freezeTableName: true, // 🚫 Evita que Sequelize intente pluralizar a "Clientes"
    timestamps: false
});

module.exports = Cliente;