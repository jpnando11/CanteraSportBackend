import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';

// Middleware de autenticación
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY); 
        req.body.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

// Middleware de roles
const roleMiddleware = (rol: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.body.user;

        if (user && user.rol === rol) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: You do not have the required rol' });
        }
    };
};

export { authMiddleware, roleMiddleware };
