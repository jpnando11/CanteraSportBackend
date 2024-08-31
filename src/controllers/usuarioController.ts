import { Request, Response, RequestHandler } from 'express'
import { Usuario } from '../models/Usuarios'

const crearUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log("Contorller");
        console.log(req.body);

        const usuario = await Usuario.create({ ...req.body })
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ "message": "Hubo un error creando el usuario", "error": (error as Error).message })
    }
}


export {
    crearUsuario
}