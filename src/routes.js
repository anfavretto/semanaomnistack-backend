const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
/* TIPOS DE PARÂMETROS
 * Query: parâmetros nomeados enviados na rota após o ?. Geralmente servem para filtros, paginação ?nome=valor -> pego no objeto request.query
 * Route: parâmetros utilizados para identificar recursos. /:id -> buscar pelo id -> request.params
 * Request body: corpo utilizado para criar/alterar recursos -> request.body
*/

routes.get('/ongs', async (request, response) => {
  const ongs = await connection('ongs').select('*');
  return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({id, name, email, whatsapp, city, uf});
  return response.json({id});
});

module.exports = routes;