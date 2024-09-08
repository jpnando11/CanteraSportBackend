import express from 'express'
import { crearUsuario, loginUsuario } from '../controllers/usuarioController';

const usuarioRoutes = express.Router();


usuarioRoutes.post('/registro', crearUsuario);
usuarioRoutes.post('/login', loginUsuario);

export default usuarioRoutes;