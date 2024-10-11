import { Request, Response, RequestHandler } from 'express';
import { Usuario } from '../models/Usuarios';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';

// Registrar nuevo usuario
const crearUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { contrasena, ...userData } = req.body;

        // Hashear la contraseña antes de guardar el usuario
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const usuario = await Usuario.create({ ...userData, contrasena: hashedPassword });
        console.log('Usuario creado:', usuario);  // Verifica el hash de la contraseña

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error creando el usuario", error: (error as Error).message });
    }
};

// Iniciar sesión
const loginUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { correo, contrasena } = req.body;
        console.log('Datos de inicio de sesión:', { correo, contrasena });  // Log para depurar

        // Buscar al usuario por correo y asegurarse de incluir la contraseña y el rol
        const usuario = await Usuario.findOne({
            where: { correo },
            attributes: ['id_usuario', 'contrasena', 'rol']
        });
        console.log('Usuario encontrado:', usuario);
        
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña está presente en la base de datos
        if (!usuario.dataValues.contrasena) {
            return res.status(500).json({ message: 'No se encontró la contraseña en la base de datos' });
        }

        // Comparar la contraseña proporcionada con el hash almacenado
        const isPasswordValid = await bcrypt.compare(contrasena, usuario.dataValues.contrasena);
        console.log('Contraseña válida:', isPasswordValid);  // Log para ver si la comparación fue exitosa

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT si la contraseña es válida
        const token = jwt.sign(
            { id: usuario.id_usuario, rol: usuario.rol },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);  // Log para ver el error
        res.status(500).json({ message: 'Hubo un error al iniciar sesión', error: (error as Error).message });
    }
};

// Listar estudiantes
const listEstudiantes: RequestHandler = async (req: Request, res: Response) => {
    try {
        const estudiantes = await Usuario.findAll({
            where: { rol: 'estudiante' }, 
            attributes: ['id_usuario', 'nombre', 'correo']  
        });

        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar estudiantes', error: (error as Error).message });
    }
};
export { crearUsuario, loginUsuario, listEstudiantes };
