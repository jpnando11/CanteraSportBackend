const express = require('express');
const authRoutes = require('./src/routes/authRoutes'); // Asegúrate de que la ruta sea correcta

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // Asegúrate de que las rutas estén correctamente configuradas

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
