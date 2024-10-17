import Evento from '../models/Evento';

class EventoService {
    async getAll() {
        return Evento.findAll();
    }

    async create(nuevoEvento: any) {
        return Evento.create(nuevoEvento);
    }

    async update(id: number, datosActualizados: any) {
        return Evento.update(datosActualizados, { where: { id } });
    }

    async delete(id: number) {
        return Evento.destroy({ where: { id } });
    }
}

export default new EventoService();
