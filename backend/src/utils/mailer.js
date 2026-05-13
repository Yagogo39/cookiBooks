const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Tu contraseña de aplicación de Google
    }
});

const enviarCorreoCompra = async (email, nombre, total, productos) => {
    const listaProductos = productos.map(p => `- ${p.nombre} (Cant: ${p.cantidad})`).join('\n');
    
    const mailOptions = {
        from: '"CookiBooks " <cookie.books21@gmail.com>',
        to: email,
        subject: '¡Confirmación de tu cookie-compra! ',
        text: `¡Hola ${nombre}!\n\nGracias por tu cookie-compra. Aquí tienes tu cookie-resumen:\n\n${listaProductos}\n\nTotal: $${total}\n\n¡Vuelve pronto! Te cookie-esperamos pronto en CookiBooks.`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { enviarCorreoCompra };