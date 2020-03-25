const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // Express converte json em objeto
app.use(routes);


app.listen(3333);