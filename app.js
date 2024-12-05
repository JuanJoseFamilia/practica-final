const express = require('express');
const app = express();

// Configura el servidor para responder con un mensaje simple en /api/message
app.get('/api/message', (req, res) => {
  res.status(200).json({ message: '¡Hola desde el backend!' });
});

// Exporta la aplicación para usarla en las pruebas sin iniciar el servidor aquí
module.exports = app;

// Solo inicia el servidor cuando no se esté corriendo en modo de prueba
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
}
