const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Browse Cubes' });
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.render('details');
});

module.exports = router;
