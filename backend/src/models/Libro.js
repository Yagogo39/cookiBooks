const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Libro = sequelize.define('libro', {
    nombre:{
        type: DataTypes.STRING,
        autor: DataTypes.STRING,
        editorial: DataTypes.STRING,
        edicion: DataTypes.STRING,
        precio: DataTypes.STRING,
        precio: DataTypes.INTEGER,
        //TODO id_autor(fk) --> en lo que hayo cómo ponerlo
        // TODO id_editorial(fk)--> lo mismo de arriba
        exitencias: DataTypes.INTEGER,
        stock_minimo: DataTypes.INTEGER
    }
});

module.exports = Libro;

//TODO tabla Pedido
