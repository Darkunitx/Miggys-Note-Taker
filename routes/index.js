const express = require('express');

const apiRouter = require('./apiroutes.js');
const htmlRouter = require('./htmlroutes.js');

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', htmlRouter);

module.exports = router;
