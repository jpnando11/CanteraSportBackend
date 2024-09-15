import express from 'express';
import { crearUsuario, loginUsuario } from '../controllers/usuarioController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';

const usuarioRoutes = express.Router();

usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);

// Ruta protegida
usuarioRoutes.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.status(200).json({ message: 'Bienvenido administrador' });
});

export default usuarioRoutes;
