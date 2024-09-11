import { Request, Response, RequestHandler } from 'express'
import { Incripciones } from '../models/Incripciones'

const IncribirEstudiante: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        await Incripciones.create({ ...req.body })
        return res.status(200).json({ mensagge: "Estudiante inscrito exitosamente" });
    } catch (error) {
        res.status(500).json({ "message": "Hubo un error creando el curso", "error": (error as Error).message })
    }
}

export {
    IncribirEstudiante
}