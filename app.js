const express = require('express');
const logger = require('./logger'); // Importa el logger
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;
  logger.info(`Solicitudes recibidas: ${requestCount}`);
  next();
});

app.get('/api/message', (req, res) => {
  res.status(200).json({ message: '¡Hola desde el backend!' });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    logger.info('Servidor corriendo en http://localhost:3000');
  });
}
