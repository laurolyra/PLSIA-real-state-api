import express from 'express';
import { Request, Response } from 'express';
import residencialFind from '../controllers/residential';

const residencialRouter = express.Router();

residencialRouter.get('/', (req: Request, res: Response) => {
  res.send('houses List');
});

residencialRouter.post('/', (req: Request, res: Response) => {
  res.send('create house');
});

residencialRouter
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Aguarda a execução da função assíncrona
      const result = await residencialFind(id);

      // Verifica se a operação foi bem-sucedida
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(404).json(result);
      }
    } catch (error) {
      // Tratamento de erro para problemas inesperados
      res.status(500).json({
        success: false,
        error: 'Erro interno do servidor',
        message: 'Ocorreu um erro inesperado',
      });
    }
  })
  .put((req: Request, res: Response) => {
    res.send('update house');
  })
  .delete((req: Request, res: Response) => {
    res.send('delete house');
  });

export default residencialRouter;
