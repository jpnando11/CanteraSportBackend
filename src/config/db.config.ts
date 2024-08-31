import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
import { Usuario } from "../models/Usuarios";

dotenv.config({ path: ".env" });

const db = new Sequelize(
    process.env.DATABASE_NAME!,
    process.env.DATABASE_USER!,
    process.env.DATABASE_PASSWORD ?? '', {
    host: process.env.DATABASE_HOST,
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
})


export default db;