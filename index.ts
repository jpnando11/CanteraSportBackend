import express, { Application } from 'express'
import db from './src/config/db.config'
import * as dotenv from 'dotenv';

const PORT: number = 3000
const app: Application = express();

dotenv.config();

// CONEXIÓN A LA BASE DE DATOS
db.sync().then(() => {
    console.log('Base de datos y tablas creadas');
}).catch((error: Error) => {
    console.error('Error al sincronizar la base de datos:', error);
});



// LEVANTAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);

});
