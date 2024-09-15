import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};


export const roleMiddleware = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;

        if (user.role !== role) {
            return res.status(403).json({ message: 'Acceso denegado. No tienes permiso.' });
        }

        next();
    };
};
