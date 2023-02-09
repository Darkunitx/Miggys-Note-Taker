const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware --> Methods or function that run before the Request is Handled by our route logic
app.use(express.static('public'));
// PArsing the Incoming Data (JSON/STRING)
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// -- Routes --> 
app.use('/', routes);

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);