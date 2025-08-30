import request from 'supertest';
import express from 'express';
import residencialRouter from '../../routes/residencial';

// Criar uma instância do Express para testes
const app = express();
app.use(express.json());
app.use('/residencial', residencialRouter);

describe('Residencial Routes', () => {
  describe('GET /', () => {
    it('deve retornar "houses List" com status 200', async () => {
      const response = await request(app).get('/residencial/').expect(200);

      expect(response.text).toBe('houses List');
    });

    it('deve retornar o tipo correto de resposta', async () => {
      const response = await request(app).get('/residencial/').expect(200);

      expect(response.type).toMatch(/text/);
    });

    it('deve responder rapidamente (sem delays)', async () => {
      const startTime = Date.now();

      await request(app).get('/residencial/').expect(200);

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // A rota '/' deve responder em menos de 100ms (sem operações assíncronas)
      expect(responseTime).toBeLessThan(100);
    });
  });

  describe('GET /:id', () => {
    it('deve retornar erro 404 para ID inválido', async () => {
      const response = await request(app).get('/residencial/999').expect(404);

      expect(response.body).toEqual({
        success: false,
        error: 'Imóvel não encontrado',
        message: 'Falha ao buscar imóvel',
      });
    });

    it('deve retornar sucesso para ID válido 123', async () => {
      const response = await request(app).get('/residencial/123').expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe('123');
      expect(response.body.data.type).toBe('Casa');
    });

    it('deve retornar sucesso para ID válido 456', async () => {
      const response = await request(app).get('/residencial/456').expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe('456');
      expect(response.body.data.type).toBe('Apartamento');
    });
  });

  describe('POST /', () => {
    it('deve retornar "create house" com status 200', async () => {
      const response = await request(app).post('/residencial/').expect(200);

      expect(response.text).toBe('create house');
    });
  });

  describe('PUT /:id', () => {
    it('deve retornar "update house" com status 200', async () => {
      const response = await request(app).put('/residencial/123').expect(200);

      expect(response.text).toBe('update house');
    });
  });

  describe('DELETE /:id', () => {
    it('deve retornar "delete house" com status 200', async () => {
      const response = await request(app)
        .delete('/residencial/123')
        .expect(200);

      expect(response.text).toBe('delete house');
    });
  });
});
