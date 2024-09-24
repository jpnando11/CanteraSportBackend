import { Request, Response, RequestHandler } from 'express'
import { Usuario } from '../models/Usuarios'
import { checkPassword, hashPassword } from '../utils/auth';
import { generateJWT } from '../utils/jwt';




const crearUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            correo,
            telefono,
            contrasena,
            tipo_identificacion,
            identificacion
        } = req.body;

        if (!primer_nombre ||
            !segundo_nombre ||
            !primer_apellido ||
            !segundo_apellido ||
            !correo ||
            !telefono ||
            !contrasena ||
            !tipo_identificacion ||
            !identificacion
        ) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const isUsuaririoExiste = await Usuario.findAll({
            attributes: ['correo'],
            where: {
                correo
            }
        });

        if (isUsuaririoExiste.length > 0) {
            return res.status(409).json({ error: 'El usuario ya existe' });
        };


        const user = { ...req.body }

        user.contrasena = await hashPassword(user.contrasena);

        const usuario = await Usuario.create(user)

        res.status(201).json({ mensagge: "Estudiante creado exitosamente", usuario });

    } catch (error) {
        res.status(500).json({ "message": "Hubo un error creando el usuario", "error": (error as Error).message })
    }
}



const loginUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {

        const { correo, contrasena } = req.body
        // Verificar si existe el usuario
        const usuario = await Usuario.findAll({
            attributes: ['correo', 'contrasena', 'rol'],
            where: {
                correo
            }
        });

        if (usuario.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" })
        }
        const usuarioDb = usuario[0].dataValues;

        // Revisar Password
        const isPasswordCorrect = await checkPassword(contrasena, usuarioDb.contrasena);

        if (!isPasswordCorrect) {
            return res.status(403).json({ error: 'Contraseña incorrecta' })
        };


        const token = generateJWT({ correo: usuarioDb.correo, rol: usuarioDb.rol });
        res.send(token);

    } catch (error) {
        res.status(500).json({ error: 'Hubo un error' })
    }
}

const listEstudiantes: RequestHandler = async (req: Request, res: Response) => {
    try {
        const estudiantes = await Usuario.findAll({ offset: 1, limit: 9 });
        res.status(200).json(estudiantes)
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error' })
    }
}

const getUser: RequestHandler = async (req: Request, res: Response) => {
    res.status(200).json(req.user)
}

export {
    crearUsuario,
    loginUsuario,
    listEstudiantes,
    getUser
}