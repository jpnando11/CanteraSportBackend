import { Request, Response, RequestHandler } from 'express'
import { Incripciones } from '../models/Incripciones'
import { UsuarioCurso } from '../models/UsuarioCurso';
import { Curso } from '../models/Cusro';
import { Usuario } from '../models/Usuarios';

const IncribirEstudiante: RequestHandler = async (req: Request, res: Response) => {
    try {

        await UsuarioCurso.create({ ...req.body })
        return res.status(200).json({ mensagge: "Estudiante inscrito exitosamente" });
    } catch (error) {
        res.status(500).json({ "message": "Hubo un error creando el curso", "error": (error as Error).message })
    }
}

const ListIncripciones: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const curso = await Curso.findByPk(id, {
            include: [Usuario]
        })

        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        return res.status(200).json(curso);
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error al obtener el curso', error: (error as Error).message });
    }
}

export {
    IncribirEstudiante,
    ListIncripciones
}