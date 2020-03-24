const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json()); // Express converte json em objeto
app.use(routes);


app.listen(3333);