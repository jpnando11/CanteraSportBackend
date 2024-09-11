import express from "express";
import { createCurso, listCurso, listCursos } from "../controllers/cursosController";

const cursosRoute = express.Router();

cursosRoute.post('/createCurso', createCurso)

cursosRoute.get('/listCursos', listCursos)

cursosRoute.get('/listCurso/:id', listCurso)

export default cursosRoute;