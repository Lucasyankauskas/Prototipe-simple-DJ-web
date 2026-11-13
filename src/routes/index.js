import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();


router.get('/', (req, res) => res.render('index', { title: 'Home' }));

router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me' }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/contact', async (req, res) => {
    const { nombre, telefono, mensaje } = req.body;

    if (!nombre || !mensaje) {
        return res.status(400).json({
            message: 'Completá los campos obligatorios.'
        });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Nuevo mensaje desde tu web - ${nombre}`,
            text: `
Nombre: ${nombre}
Teléfono: ${telefono || 'No indicado'}

Mensaje:
${mensaje}
            `
        });

        res.json({ message: '¡Mensaje enviado correctamente!' });

    } catch (error) {
        console.error('Error al enviar el correo:', error);

        res.status(500).json({
            message: 'No se pudo enviar el mensaje. Intentá nuevamente.'
        });
    }
});



export default router;