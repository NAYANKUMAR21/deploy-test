const express = require('express');
const router = express.Router();

function middle(req, res, next) {
  console.log('req.params');
  next();
}

// router.use(middle);

router.get('/1', middle, (req, res) => {
  res.send('route 1');
});
router.get('/2', (req, res) => {
  res.send('route 2');
});

module.exports = router;
