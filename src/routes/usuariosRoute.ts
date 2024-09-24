import express from 'express'
import { crearUsuario, listEstudiantes, getUser, loginUsuario } from '../controllers/usuarioController';
import { authenticate } from '../middleware/auth';

const usuarioRoutes = express.Router();


usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);
usuarioRoutes.get('/listEtudiantes', listEstudiantes);

usuarioRoutes.get('/listUsuarioLogin', authenticate, getUser)

export default usuarioRoutes;