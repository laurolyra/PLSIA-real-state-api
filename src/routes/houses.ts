const express = require('express');
const router = express.Router();

router.get('/testee', (req, res) => {
  res.send('houses List');
});

module.exports = router;
