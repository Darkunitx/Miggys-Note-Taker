const express = require('express');

const apiRouter = require('./apiroutes.js');
const htmlRouter = require('./htmlroutes.js');

const app = express();

app.use('/api', apiRouter);
app.use('/', htmlRouter);

module.exports = app;    