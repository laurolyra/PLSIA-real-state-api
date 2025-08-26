import express from 'express';
import { Request, Response } from 'express';

const houseRouter = express.Router();

houseRouter.get('/', (req: Request, res: Response) => {
  res.send('houses List');
});

houseRouter
  .route('/:id')
  .get((req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`houses with the id ${id}`);
  })
  .post((req: Request, res: Response) => {
    res.send('create house');
  })
  .put((req: Request, res: Response) => {
    res.send('update house');
  })
  .delete((req: Request, res: Response) => {
    res.send('delete house');
  });

export default houseRouter;
