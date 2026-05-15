const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LibroCategoria = sequelize.define('Categoria_libro', {
    id_libro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'libros',
            key: 'id_libro'
        }
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'categoria', 
            key: 'id_categoria'
        }
    }
}, {
    tableName: 'categoria_libro', 
    timestamps: false             
});

module.exports = LibroCategoria;