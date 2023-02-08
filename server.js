const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.use('/', routes);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);