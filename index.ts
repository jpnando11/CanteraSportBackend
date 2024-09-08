import express, { Application, json, urlencoded } from 'express'
import morgan from 'morgan';
import db from './src/config/db.config'
import * as dotenv from 'dotenv';
import usuarioRoutes from './src/routes/usuariosRoute';
import cursosRoute from './src/routes/cursoRoutes';

const PORT: number = 3000
const app: Application = express();

// HABILITAR LECTURA DE DATOS DE FORMUALRIOS
app.use(morgan("dev"))
app.use(json());
app.use(urlencoded({ extended: true }))

dotenv.config({ path: ".env" });

// CONEXIÓN A LA BASE DE DATOS
(async () => {
    try {
        await db.authenticate();
        console.log("Coneccion a la base de datos exitosa");
        await db.sync({ force: true });

    } catch (error) {
        console.log(error);

    }
})();


app.use('/auth', usuarioRoutes)
app.use('/curso', cursosRoute)

// LEVANTAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);

});
