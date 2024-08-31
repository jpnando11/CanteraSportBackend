import express from 'express'
import { crearUsuario } from '../controllers/usuarioController';

const usuarioRoutes = express.Router();


usuarioRoutes.post('/registro', crearUsuario);

export default usuarioRoutes;