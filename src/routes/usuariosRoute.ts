import express from 'express'
import { crearUsuario, listEstudiantes, getUser, loginUsuario, listEstudiante, editarUsuario, listMaestro } from '../controllers/usuarioController';
import { authenticate } from '../middleware/auth';

const usuarioRoutes = express.Router();


usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);
usuarioRoutes.get('/listEtudiantes', listEstudiantes);
usuarioRoutes.get('/listEtudiante/:id', listEstudiante);

usuarioRoutes.get('/listUsuarioLogin', authenticate, getUser)
usuarioRoutes.post('/editarEstudiante', editarUsuario)
usuarioRoutes.get('/listMaestro', listMaestro)

export default usuarioRoutes;