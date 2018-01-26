// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

// Importando os controllers
const usuariosController = require('./controllers/usuarios.js');

// Instanciando o express
const app = express();

// Aplicando o body parser
app.use(bodyParser.json());

// Conecta a nossa api ao banco de dados
app.use(expressMongoDb('mongodb://localhost/estacaohack-turma2'));

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://localhost:3000');
});

// Endpoints
app.get('/api/usuarios', usuariosController.listar);
app.post('/api/usuarios/usuario', usuariosController.criar);
