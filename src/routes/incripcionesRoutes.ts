import express from "express";
import { IncribirEstudiante } from "../controllers/incripcionesController";

const incripcionesRoute = express.Router();

incripcionesRoute.post('/incripcionCurso', IncribirEstudiante)

export default incripcionesRoute;