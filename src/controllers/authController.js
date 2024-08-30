const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Registro de usuario
async function register(req, res) {
    const { nombre, email, password, modalidad, rol } = req.body;

    if (!nombre || !email || !password || !modalidad) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.createUser(nombre, email, hashedPassword, modalidad, rol);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
}

// Login de usuario
async function login(req, res) {
    const { email, password, modalidad } = req.body;

    if (!email || !password || !modalidad) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const usuario = await userModel.findUserByEmailAndModalidad(email, modalidad);

    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol, modalidad: usuario.modalidad }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
}

module.exports = {
    register,
    login
};
