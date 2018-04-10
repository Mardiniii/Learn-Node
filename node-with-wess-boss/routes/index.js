const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'Sebas', age: 28, cool: true };
  // res.send('Hey! It works!');
  // res.json(wes);
  res.render('index');
});

module.exports = router;
