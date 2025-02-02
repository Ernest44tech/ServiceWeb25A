const express = require('express'); //Importacion del modulo Express
const app = express(); //Inicializacion la aplicacion Express

app.use(express.json()); // Middleware para que Express pueda procesar JSON en las solicitudes

app.get('/', (req, res) => {
    res.send('Hello World!');
}) // Definimos una ruta GET en la raíz ('/') que responde con "Hello World!"

module.exports = app; // Exportamos la aplicación para que pueda ser utilizada en otros archivos

