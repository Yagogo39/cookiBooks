const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Libro = sequelize.define('Libro', {
    id_libro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    edicion: {
        type: DataTypes.STRING(100)
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stockminimo: { // Sequelize suele preferir minúsculas si no usas comillas en SQL
        type: DataTypes.INTEGER,
        defaultValue: 5
    },
    existencias: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate:{
            min: 0,
            esMenorQueMax(value) {
                if(value > this.stockmaximo) {
                    throw new Error('Las existencias no pueden superar el stock máximo')
                }
            }
        }
    },
stockminimo: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
        validate: { min: 0 }
    }
}, {
    tableName: 'libros',
    timestamps: false
});

module.exports = Libro;