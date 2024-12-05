const request = require('supertest');
const app = require('../app'); // Importa tu archivo principal de servidor Express

let server;

beforeAll((done) => {
  // Inicia el servidor antes de ejecutar las pruebas
  server = app.listen(3000, done);
});

afterAll((done) => {
  // Detiene el servidor después de que las pruebas se completen
  server.close(done);
});

// Prueba para el endpoint /api/message
test('GET /api/message responde con un mensaje', async () => {
  const res = await request(app).get('/api/message');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('¡Hola desde el backend!');
});
