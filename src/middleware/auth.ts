import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Usuario } from '../models/Usuarios';

declare global {
    namespace Express {
        interface Request {
            user?: object
        }
    }
}


export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        return res.status(401).json({ error: "No autorizado" });
    }

    const [, token] = bearer.split(' ')

    try {
        const decoded = jwt.verify(token, 'tokenparalaaplicacion');

        if (typeof decoded === 'object' && decoded.correo) {
            const user = await Usuario.findOne({
                where: {
                    correo: decoded.correo
                }
            })

            if (user) {
                req.user = user.dataValues
                next()
            }
        }

    } catch (error) {
        res.status(500).json({ error: 'Token No Válido' })
    }


    next();
    // Validar el token JWT token

}