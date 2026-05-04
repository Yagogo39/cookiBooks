const { Sequelize } = require('sequelize');
require('dotenv').config();

//TODO--> URL de conexión
const sequelize = new Sequelize(process.env.DATABASE_URL,{
    //TODO --> BD
    //! Base de datos provicional
    dialect: 'postgres',
    logging: 'false',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión con la BD establecida.');
    } catch (error) {
        console.error('Falló la conexión con la base de datos.', error);
    }
}