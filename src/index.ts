import express from 'express';
import { Request, Response } from 'express';

import houseRouter from './routes/houses';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!*');
});

app.use('/houses', houseRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
