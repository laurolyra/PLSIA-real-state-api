import request from 'supertest';
import express from 'express';
import residencialRouter from '../../routes/residencial';

// Criar uma instância do Express para testes
const app = express();
app.use('/residencial', residencialRouter);

describe('GET /residencial/', () => {
  it('deve retornar "houses List"', async () => {
    // Arrange: Preparar o teste
    const expectedResponse = 'houses List';

    // Act: Executar a ação (fazer a requisição)
    const response = await request(app).get('/residencial/').expect(200);

    // Assert: Verificar o resultado
    expect(response.text).toBe(expectedResponse);
  });

  it('deve retornar status 200', async () => {
    const response = await request(app).get('/residencial/').expect(200);

    expect(response.status).toBe(200);
  });

  it('deve responder rapidamente (sem operações assíncronas)', async () => {
    const startTime = Date.now();

    await request(app).get('/residencial/').expect(200);

    const responseTime = Date.now() - startTime;

    // Como esta rota não tem async/await, deve responder rapidamente
    expect(responseTime).toBeLessThan(50);
  });
});
