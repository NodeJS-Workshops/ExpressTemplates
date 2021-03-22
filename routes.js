const { Router } = require('express');
const cubeController = require('./controllers/cubeController');
const aboutController = require('./controllers/aboutController');

const router = Router();

router.use('/', cubeController);
router.use('/about', aboutController);

module.exports = router;
