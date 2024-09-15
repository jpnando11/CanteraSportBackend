import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Usuario } from "../models/Usuarios";
import { Curso } from "../models/Cusro";
import { Incripciones } from "../models/Incripciones";

dotenv.config({ path: './src/.env' });


console.log("DATABASE_USER: ", process.env.DATABASE_USER);
console.log("DATABASE_PASSWORD: ", process.env.DATABASE_PASSWORD);

const db = new Sequelize(
    process.env.DATABASE_NAME!,
    process.env.DATABASE_USER!,
<<<<<<< HEAD
    process.env.DATABASE_PASSWORD!, 
    {
        host: process.env.DATABASE_HOST!,
        port: 3306,
        dialect: 'mariadb',
        models: [Usuario],
        define: {
            timestamps: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 3000,
            idle: 10000
        },
    }
);
=======
    process.env.DATABASE_PASSWORD ?? '', {
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialect: 'mariadb',
    models: [Usuario, Curso, Incripciones],
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
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd

export default db;
