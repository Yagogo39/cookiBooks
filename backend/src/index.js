const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
require('dotenv').config();

const app = express();

//? 1. Middlewares
app.use(cors());
app.use(express.json());

//? 2. Conexión con la BD
connectDB();

//TODO 3. Sincronización de los modelos 
sequelize.sync({ force: false }
    .then(() => console.log('Tablas soncronizadas'))
    .catch(err => console.log('Error al sincronizar las tablas', err))
)

//TODO 4. Importar las rutas cuando estén listas
//! const libroRoutes = require('./routes/libroRoutes);
//! app.use('/api/libros), libroRoutes);

//? 5. Ruta de prueba
app.get('/', (req, res) =>{
    res.send('Servidor CookiBooks jalando chido 7w7');
});

//? Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});