const port = 8080; // Definimos el puerto en el que se ejecutará el servidor
const app = require('./app'); // Importamos la configuración de la aplicación desde `app.js`

(async () => { // Función asíncrona autoinvocada para iniciar el servidor

    console.log('Starting Server...');     // Mensaje en consola al iniciar el servidor
    app.listen(port, () => {
        console.log(`Server is Running on port ${port}`);     // Inicia el servidor en el puerto especificado y muestra un mensaje de confirmación
    });
})();



