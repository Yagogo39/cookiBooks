const express = require('express');
const router = express.Router();
const { getLibros, createLibro } = require('../controllers/libroController');

//! Endpints
rputer.get('/', getlibros);
router.post('/', createLibro);

module.exports = router;