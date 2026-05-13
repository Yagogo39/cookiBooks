const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LibroCategoria = sequelize.define('LibroCategoria', {
    // Definimos AMBAS como primaryKey para que sea una llave compuesta
    // y Sequelize no intente inventar una columna "id"
    id_libro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'libros', // Nombre de la tabla en SQL
            key: 'id_libro'
        }
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'categoria', // Nombre de la tabla en SQL
            key: 'id_categoria'
        }
    }
}, {
    tableName: 'categoria_libro', // El nombre exacto de tu script SQL
    timestamps: false             // Tu script no tiene createdAt/updatedAt
});

module.exports = LibroCategoria;