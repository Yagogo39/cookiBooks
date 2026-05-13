const { sequelize } = require('../config/db');
const Libro = require('../models/Libro');
const Cliente = require('../models/Cliente');
const Pedido = require('../models/pedido');
const { enviarCorreoCompra } = require('../utils/mailer');

const realizarVenta = async (req, res) => {
    const t = await sequelize.transaction(); // Iniciamos transacción
    
    try {
        const { nombre, correo, carrito } = req.body; // carrito es un array de { id_libro, cantidad }

        // 1. Crear o buscar al cliente (como no hay login, lo identificamos por nombre/correo)
        const [cliente] = await Cliente.findOrCreate({
            where: { nombre_apellido: nombre },
            defaults: { calle: 'Venta Mostrador' },
            transaction: t
        });

        let totalVenta = 0;
        const detallesParaCorreo = [];

        // 2. Validar stock y calcular total
        for (const item of carrito) {
            const libro = await Libro.findByPk(item.id_libro, { transaction: t });

            if (!libro) throw new Error(`El libro con ID ${item.id_libro} no existe`);
            
            // Lógica de Stock Máximo/Mínimo y Negativos
            if (libro.existencias < item.cantidad) {
                throw new Error(`Stock insuficiente para: ${libro.nombre}`);
            }

            // Descontar stock
            libro.existencias -= item.cantidad;
            await libro.save({ transaction: t });

            totalVenta += libro.precio * item.cantidad;
            detallesParaCorreo.push({ nombre: libro.nombre, cantidad: item.cantidad });
        }

        // 3. Crear el Pedido
        const nuevoPedido = await Pedido.create({
            id_cliente: cliente.id_cliente,
            Total: totalVenta,
            fechaIncio: new Date()
        }, { transaction: t });

        // 4. Confirmar todo en la BD
        await t.commit();

        // 5. Enviar correo (fuera de la transacción para no retrasar la BD)
        enviarCorreoCompra(correo, nombre, totalVenta, detallesParaCorreo)
            .catch(err => console.error("Error enviando correo:", err));

        res.status(201).json({
            ok: true,
            msg: '¡Compra realizada con éxito!',
            pedidoId: nuevoPedido.id_pedido
        });

    } catch (error) {
        await t.rollback(); // Si algo salió mal, deshacemos los cambios en el stock
        res.status(400).json({
            ok: false,
            msg: error.message
        });
    }
};

module.exports = { realizarVenta };