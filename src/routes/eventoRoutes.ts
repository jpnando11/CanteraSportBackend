import { Router } from 'express';
import eventoController from '../controllers/eventoController';

const router = Router();

// Endpoints para eventos
router.get('/listEventos', eventoController.getEventos);
router.post('/crearEvento', eventoController.createEvento);
router.put('/actualizarEvento/:id', eventoController.updateEvento);
router.delete('/eliminarEvento/:id', eventoController.deleteEvento);

export default router;
