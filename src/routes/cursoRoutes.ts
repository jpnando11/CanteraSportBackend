import express from "express";
import { informacionGeneral } from "../controllers/cursosController";
import { authenticate } from "../middleware/auth";

const cursosRoute = express.Router();

cursosRoute.use(authenticate)

cursosRoute.get('/informacionGeneral', informacionGeneral)

export default cursosRoute;