import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import db from './src/config/db.config';
import * as dotenv from 'dotenv';
import usuarioRoutes from './src/routes/usuariosRoute';
import cursosRoute from './src/routes/cursoRoutes';
import cors from 'cors';
import incripcionesRoute from './src/routes/incripcionesRoutes';

const PORT: number = 3000;
const app: Application = express();

<<<<<<< HEAD
// HABILITAR LECTURA DE DATOS DE FORMULARIOS
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
=======
// HABILITAR LECTURA DE DATOS DE FORMUALRIOS
app.use(morgan("dev"));
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }))
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd

dotenv.config({ path: ".env" });

// CONEXIÓN A LA BASE DE DATOS Y SINCRONIZACIÓN
(async () => {
    try {
        await db.authenticate();
        console.log("Conexión a la base de datos exitosa");

        // Sincronizar la base de datos antes de iniciar el servidor
        await db.sync({ alter: true });
        console.log("Base de datos sincronizada");

        // LEVANTAR EL SERVIDOR después de la sincronización
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });

    } catch (error) {
        console.log("Error al conectar o sincronizar la base de datos:", error);
    }
})();

<<<<<<< HEAD
app.use('/auth', usuarioRoutes);
=======

app.use('/auth', usuarioRoutes)
app.use('/curso', cursosRoute)
app.use('/incripciones', incripcionesRoute)

// LEVANTAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);

});
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd
