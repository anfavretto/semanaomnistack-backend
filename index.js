const express = require('express');
const app = express();
app.use(express.json()); // Express converte json em objeto

/* TIPOS DE PARÂMETROS
 * Query: parâmetros nomeados enviados na rota após o ?. Geralmente servem para filtros, paginação ?nome=valor -> pego no objeto request.query
 * Route: parâmetros utilizados para identificar recursos. /:id -> buscar pelo id -> request.params
 * Request body: corpo utilizado para criar/alterar recursos -> request.body
*/

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluna: 'Aline N Favretto'
  });
});
app.listen(3333);