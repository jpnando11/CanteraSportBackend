<<<<<<< HEAD
import express from 'express';
import { crearUsuario, loginUsuario } from '../controllers/usuarioController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';
=======
import express from 'express'
import { crearUsuario, listEstudiantes, loginUsuario } from '../controllers/usuarioController';
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd

const usuarioRoutes = express.Router();

usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);
<<<<<<< HEAD
=======
usuarioRoutes.get('/listEtudiantes', listEstudiantes);
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd

// Ruta protegida
usuarioRoutes.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.status(200).json({ message: 'Bienvenido administrador' });
});

export default usuarioRoutes;
