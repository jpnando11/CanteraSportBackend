import express from 'express'
import { crearUsuario, listEstudiantes, loginUsuario } from '../controllers/usuarioController';

const usuarioRoutes = express.Router();


usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);
usuarioRoutes.get('/listEtudiantes', listEstudiantes);

export default usuarioRoutes;