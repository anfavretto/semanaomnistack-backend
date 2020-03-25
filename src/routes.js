const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
/* TIPOS DE PARÂMETROS
 * Query: parâmetros nomeados enviados na rota após o ?. Geralmente servem para filtros, paginação ?nome=valor -> pego no objeto request.query
 * Route: parâmetros utilizados para identificar recursos. /:id -> buscar pelo id -> request.params
 * Request body: corpo utilizado para criar/alterar recursos -> request.body
*/

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;