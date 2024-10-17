import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Usuario } from "../models/Usuarios";
import { Curso } from "../models/Cusro";
import { Incripciones } from "../models/Incripciones";
import { UsuarioCurso } from "../models/UsuarioCurso";

dotenv.config({ path: './src/.env' });


console.log("DATABASE_USER: ", process.env.DATABASE_USER);
console.log("DATABASE_PASSWORD: ", process.env.DATABASE_PASSWORD);

const db = new Sequelize(
    "cantera_sport",
    "root",
    '', {
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialect: 'mariadb',
    models: [Usuario, Curso, Incripciones, UsuarioCurso],
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
})


export default db;
