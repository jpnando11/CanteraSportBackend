const pool = require('../config/db');

async function createUser(nombre, email, hashedPassword, modalidad, rol) {
    const conn = await pool.getConnection();
    try {
        const result = await conn.query(
            "INSERT INTO usuarios (nombre, email, password, modalidad, rol) VALUES (?, ?, ?, ?, ?)", 
            [nombre, email, hashedPassword, modalidad, rol]
        );
        return result;
    } finally {
        conn.release();
    }
}

async function findUserByEmailAndModalidad(email, modalidad) {
    const conn = await pool.getConnection();
    try {
        const result = await conn.query(
            "SELECT * FROM usuarios WHERE email = ? AND modalidad = ?", 
            [email, modalidad]
        );
        return result[0]; 
    } finally {
        conn.release();
    }
}

module.exports = {
    createUser,
    findUserByEmailAndModalidad
};
