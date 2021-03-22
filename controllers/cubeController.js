const { Router } = require('express');
const { createCube } = require('../services/cubeServices');

const router = Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Browse Cubes' });
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
  try {
    createCube(req.body);

    return res.redirect('/');
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', (req, res) => {
  res.render('details');
});

module.exports = router;
