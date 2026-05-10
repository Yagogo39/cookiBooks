const Libro = require('../models/Libro');

//! Obtener todos los libros
const getLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de libros', error });
    }
};

//* Crear un nuevo libro 
const createLibro = async(req, res) =>{
    try {
        const nuevoLibro = await Libro.create(req.body);
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el libro', error });
    }
};

module.exports = { getLibros, createLibro }