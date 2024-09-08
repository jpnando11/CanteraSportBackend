import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization

    console.log(bearer);

    if (!bearer) {
        return res.status(401).json({ error: "No autorizado" });
    }

    const [, token] = bearer.split(' ')

    try {
        const decoded = jwt.verify(token, 'tokenparalaaplicacion');
        console.log(decoded);

    } catch (error) {
        res.status(500).json({ error: 'Token No Válido' })
    }


    next();
    // Validar el token JWT token

}