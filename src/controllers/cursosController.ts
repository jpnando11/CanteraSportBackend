import { Request, Response, RequestHandler } from 'express'
import { Curso } from '../models/Cusro';

const createCurso: RequestHandler = async (req: Request, res: Response) => {
    // Aca va el codigo para crear un curso

    try {
        const { nombre_curso, nivel_categorias, descripcion_curso, costo_curso } = req.body;

        if (!nombre_curso || !nivel_categorias || !descripcion_curso || !costo_curso) {
            return res.status(400).json({ error: "Faltan datos obligatorios" });
        }

        const curso = await Curso.create({ ...req.body })


        return res.status(200).json({ mensagge: "Curso creado exitosamente", curso });
    } catch (error) {
        res.status(500).json({ "message": "Hubo un error creando el curso", "error": (error as Error).message })
    }


}

const listCursos: RequestHandler = async (req: Request, res: Response) => {

    const cursos = await Curso.findAll();

    res.status(200).json(cursos)
}

const listCurso: RequestHandler = async (req: Request, res: Response) => {

    try {
        const cursos = await Curso.findAll({
            where: {
                id_curso: req.params.id
            }
        });

        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error' })
    }

}

export {
    createCurso,
    listCursos,
    listCurso
}