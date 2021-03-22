const { Router } = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = Router();

router.use('/', homeController);
router.use('/cubes', cubeController);
router.use('*', (req, res) => {
  res.render('404');
});

module.exports = router;
