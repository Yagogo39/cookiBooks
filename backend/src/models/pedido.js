// models/pedido.js
const { DataTypes } = require('sequelize'); // Importas los tipos de datos
const { sequelize } = require('../config/db'); // <--- ESTA ES LA QUE TE FALTA


const Pedido = sequelize.define('Pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_pedido'
    },
    fechaIncio: { // <-- I mayúscula según el script
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'fechaincio' // Postgres lo guarda todo en minúsculas internamente
    },
    Total: { // <-- T mayúscula según el script
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'total'
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        field: 'id_cliente'
    }
}, {
    tableName: 'Pedido',
    freezeTableName: true,
    timestamps: false
});

module.exports = Pedido;