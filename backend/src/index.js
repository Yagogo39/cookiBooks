const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
require('dotenv').config();

//? 1. Importar Modelos y guardarlos en variables para poder usarlos en las relaciones
const Autor = require('./models/Autor');
const Categoria = require('./models/Categoria');
const Cliente = require('./models/Cliente');
const Editorial = require('./models/Editorial');
const Libro = require('./models/Libro');
const Pedido = require('./models/pedido'); // Asegúrate que el archivo se llame pedido.js
const LibroCategoria = require('./models/libro_categoria');

//? 2. Relaciones (Ahora sí las variables existen)
// Relaciones 1 a N
Autor.hasMany(Libro, { foreignKey: 'id_autor' });
Libro.belongsTo(Autor, { foreignKey: 'id_autor' });

Editorial.hasMany(Libro, { foreignKey: 'id_editorial' });
Libro.belongsTo(Editorial, { foreignKey: 'id_editorial' });

//* Relación N a N
Libro.belongsToMany(Categoria, { through: LibroCategoria, foreignKey: 'id_libro' });
Categoria.belongsToMany(Libro, { through: LibroCategoria, foreignKey: 'id_categoria' });

const app = express();

//? Middleware
app.use(cors());
app.use(express.json());

//? Conexión BD
connectDB();

//! Sincronización de modelos 
sequelize.sync({ force : false })
    .then(() => console.log('Tablas sincronizadas con el servidor externo'))
    .catch(err => console.log('Error al sincronizar las tablas:', err));

//? Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor CokiBooks funcionando... ');
});

//? Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});