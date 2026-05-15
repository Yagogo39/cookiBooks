const { sequelize } = require('../config/db');
const Libro = require('../models/Libro');
const Cliente = require('../models/Cliente');
const Pedido = require('../models/pedido');
const { enviarCorreoCompra } = require('../utils/mailer');

const realizarVenta = async (req, res) => {
    const t = await sequelize.transaction();
    
    try {
        // 1. Extraer datos (aseguramos nombre_apellido para que no sea undefined)
        const { nombre_apellido, correo, carrito } = req.body;

        // 2. Crear o buscar al cliente
        const [cliente] = await Cliente.findOrCreate({
            where: { nombre_apellido: nombre_apellido },
            defaults: { calle: 'Venta Mostrador' },
            transaction: t
        });

        let totalVenta = 0;
        const detallesParaCorreo = [];

        // 3. Validar stock y actualizar libros
        for (const item of carrito) {
            const libro = await Libro.findByPk(item.id_libro, { transaction: t });

            if (!libro) throw new Error(`El libro con ID ${item.id_libro} no existe`);
            
            // Usamos Existencias con E mayúscula como está en tu script/modelo
            if (libro.Existencias < item.cantidad) {
                throw new Error(`Stock insuficiente para: ${libro.nombre}`);
            }

            libro.Existencias -= item.cantidad;
            await libro.save({ transaction: t });

            totalVenta += parseFloat(libro.precio) * item.cantidad;
            detallesParaCorreo.push({ nombre: libro.nombre, cantidad: item.cantidad });
        }

        // 4. Crear el Pedido (Campos con mayúsculas según tu script SQL)
        const nuevoPedido = await Pedido.create({
            id_cliente: cliente.id_cliente,
            Total: totalVenta,
            fechaIncio: new Date()
        }, { transaction: t });

        // 5. COMMIT - Aquí se guardan los cambios definitivamente
        await t.commit();

        // 6. Respuesta al cliente (Antes del correo para evitar el error de headers)
        res.status(201).json({
            ok: true,
            msg: '¡Compra realizada con éxito!',
            pedidoId: nuevoPedido.id_pedido
        });

        // 7. Enviar correo (Fuera de la transacción y del flujo principal)
        enviarCorreoCompra(correo, nombre_apellido, totalVenta, detallesParaCorreo)
            .catch(err => console.error("Error silencioso en mailer:", err.message));

    } catch (error) {
        // Solo intentamos rollback si la transacción NO ha terminado
        if (t && !t.finished) {
            await t.rollback();
        }

        // Si ya respondimos al cliente (porque el error fue el correo), no hacemos nada más
        if (res.headersSent) return;

        res.status(400).json({
            ok: false,
            msg: error.message
        });
    }
};

module.exports = { realizarVenta };