const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!**');
});

const houseRouter = require('./routes/houses');

app.use('/houses', houseRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
