import express from 'express';
import { Request, Response } from 'express';

import residencialRouter from './routes/residencial';

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!*' });
});

app.use('/residencial', residencialRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
