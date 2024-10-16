import express from "express";
import { IncribirEstudiante, ListIncripciones } from "../controllers/incripcionesController";

const incripcionesRoute = express.Router();

incripcionesRoute.post('/incripcionCurso', IncribirEstudiante)
incripcionesRoute.get('/incripcionCurso/:id', ListIncripciones)

export default incripcionesRoute;