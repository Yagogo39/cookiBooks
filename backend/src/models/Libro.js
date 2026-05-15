const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Libro = sequelize.define('Libros', {
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
    stockminimo: {
        type: DataTypes.INTEGER,
        defaultValue: 5
    },
    imagen_url: {
    type: DataTypes.STRING(500),
    allowNull: true, 
    defaultValue: 'https://via.placeholder.com/150' //! NOTA PARA COOKIE: Esta es una imagen GENERICA
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