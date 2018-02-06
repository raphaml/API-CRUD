// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

// Importando os controllers
const usuariosController = require('./controllers/usuarios.js');

// Instanciando o express
const app = express();

// Aplicando o body parser isso significa que tudo o que ele encontrar que nao for em formato json
// ele ira automaticamente transformar no formato json
app.use(bodyParser.json());

// Conecta a nossa api ao banco de dados usando a biblioteca do express-mongo-db
app.use(expressMongoDb('mongodb://localhost/api-teste-projeto'));

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://localhost:3000');
});

// Endpoints
app.get('/api/usuarios', usuariosController.listar);
app.post('/api/usuarios/usuario', usuariosController.criar);

// QUANDO EU USO O : idDaUrl ESTOU DIZENDO QUE MEUS METODOS HTTP put E delete
// IRAO PEGAR OS PARAMETROS QUE EU COLOCAR DEPOIS DO /usuario
// COMO SE FOSSE NOSSA query
app.put('/api/usuarios/usuario/:idDaUrl', usuariosController.atualizar);
app.delete('/api/usuarios/usuario/:idDaUrl', usuariosController.deletar);
