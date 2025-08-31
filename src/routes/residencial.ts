import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import {
  residencialCreate,
  residencialFind,
  residencialFindAll,
} from '../controllers/residential';
import { PropertySchema } from '../schemas/residencial';

const residencialRouter = express.Router();

//middleware test
const middleWare = (_req: Request, _res: Response, next: NextFunction) => {
  console.log('testing for every route!!');
  next();
};

residencialRouter.use(middleWare);

residencialRouter.get('/', async (_req, res) => {
  const result = await residencialFindAll();
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
});

residencialRouter.post('/', async (req: Request, res: Response) => {
  const { body } = req;
  // zod in action
  try {
    PropertySchema.parse(body);
  } catch (error) {
    return res.status(400).json({ message: 'invalid data' });
  }
  // alternative:
  // const validateBody = PropertySchema.safeParse(body);
  // if (validateBody.error) {
  //   return res.status(400).json({ message: 'invalid data' });
  // }
  const creation = await residencialCreate(body);
  if (creation.success) {
    res.status(201).json(creation);
  }
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
