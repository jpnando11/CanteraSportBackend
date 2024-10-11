import { Request, Response } from 'express';
import eventoService from '../services/eventoService';

class EventoController {
    async getEventos(req: Request, res: Response) {
        try {
            const eventos = await eventoService.getAll();
            console.log('Eventos obtenidos:', eventos);
            res.json(eventos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los eventos' });
        }
    }
    async createEvento(req: Request, res: Response) {
        try {
            console.log("Cuerpo recibido:", req.body);
            const { titulo, fecha, hora, descripcion, lugar } = req.body;
    
            if (!titulo || !fecha || !hora) {
            return res.status(400).json({ error: "Faltan campos requeridos" });
            }
            const nuevoEvento = { titulo, fecha, hora, descripcion, lugar };
            console.log("Datos a insertar:", nuevoEvento); 
            const evento = await eventoService.create(nuevoEvento);
            res.status(201).json(evento);
        } catch (error) {
            console.error("Error al crear el evento:", error);
            res.status(500).json({ error: "Error al crear el evento" });
    }
}

    async updateEvento(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const datosActualizados = req.body;
            const evento = await eventoService.update(Number(id), datosActualizados);
            res.json(evento);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el evento' });
        }
    }

    async deleteEvento(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await eventoService.delete(Number(id));
            res.json({ message: 'Evento eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el evento' });
        }
    }
}

export default new EventoController();
