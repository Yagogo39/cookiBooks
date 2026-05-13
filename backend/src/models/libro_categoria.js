const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LibroCategoria = sequelize.define('LibroCategoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    tableName: 'libro_categorias',
    timestamps: false 
});

module.exports = LibroCategoria;