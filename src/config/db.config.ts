import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
import { Usuario } from "../models/Usuarios";
import { Curso } from "../models/Cusro";
import { Incripciones } from "../models/Incripciones";
import {Payment} from '../models/Payment';

dotenv.config({ path: ".env" });

const db = new Sequelize(
    "cantera_sport",
    "root",
     'GIOVANNI.13.leal', {
    host: process.env.DATABASE_HOST,
    port: 3307,
    dialect: 'mariadb',
    models: [Usuario, Curso, Incripciones, Payment],
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