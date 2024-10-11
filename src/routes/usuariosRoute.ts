import { Router } from 'express';
import { crearUsuario, loginUsuario, listEstudiantes } from '../controllers/usuarioController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';

const usuarioRoutes = Router();

usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);
usuarioRoutes.get('/listEstudiantes', listEstudiantes);

// Ruta protegida
usuarioRoutes.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.status(200).json({ message: 'Bienvenido administrador' });
});

export default usuarioRoutes;
