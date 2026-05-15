const express = require('express');
const router = express.Router();
const { getLibros, createLibro } = require('../controllers/libroController');

//! Endpints
router.get('/', getLibros);
router.post('/', createLibro);

module.exports = router;