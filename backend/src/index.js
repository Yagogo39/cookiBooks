const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
require('dotenv').config();

//? 1. Importar Modelos
const Autor = require('./models/Autor');
const Categoria = require('./models/Categoria');
const Cliente = require('./models/Cliente');
const Editorial = require('./models/Editorial');
const Libro = require('./models/Libro');
const Pedido = require('./models/pedido'); 
const LibroCategoria = require('./models/libro_categoria');

//? 2. Relaciones (Corregidas para tu script SQL)

// Relaciones 1 a N
Autor.hasMany(Libro, { foreignKey: 'id_autor' });
Libro.belongsTo(Autor, { foreignKey: 'id_autor' });

Editorial.hasMany(Libro, { foreignKey: 'id_editorial' });
Libro.belongsTo(Editorial, { foreignKey: 'id_editorial' });

Cliente.hasMany(Pedido, { foreignKey: 'id_cliente' });
Pedido.belongsTo(Cliente, { foreignKey: 'id_cliente' });

//* Relación N a N (La que causaba el error de la columna "id")
Libro.belongsToMany(Categoria, { 
    through: LibroCategoria, 
    foreignKey: 'id_libro', 
    otherKey: 'id_categoria' 
});
Categoria.belongsToMany(Libro, { 
    through: LibroCategoria, 
    foreignKey: 'id_categoria', 
    otherKey: 'id_libro' 
});

const app = express();

//? Middleware
app.use(cors());
app.use(express.json());

//? Conexión BD
connectDB();

//! Sincronización de modelos 
sequelize.sync({ force: false, alter: false })
    .then(() => console.log('✅ Tablas sincronizadas con el servidor externo'))
    .catch(err => console.log('❌ Error al sincronizar las tablas:', err.message));

//? Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor CokiBooks funcionando... 🍪');
});

//? Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});