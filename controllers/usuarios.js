// Função para listar todos os meus usuários que estão no banco de dados na coleção 'usuários'
exports.listar = (req, res) => {
    req.db.collection('usuarios').find().toArray((err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
}

// Função para testar o POST na minha rota '/api/usuarios/usuario'
exports.criar = (req, res) => {
    console.log('Processando requisição de um novo usuario.');
}

