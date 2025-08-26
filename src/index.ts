const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.status(200).json({ message: 'hello world' });
  res.render('index', { message: 'worlddd' }); // server-side view rendering
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
