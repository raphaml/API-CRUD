const ObjectID = require('mongodb').ObjectID;

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
    req.db.collection('usuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.sendStatus(201);
        }
    });
}

// FUNÇÃO PARA TESTAR O PUT NA MINHA ROTA /api/usuarios/usuario
exports.atualizar = (req, res) => {
    let id = req.params.idDaUrl

    req.db.collection('usuarios').update({ "_id" :ObjectID(id)}, req.body, (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.sendStatus(201);
        }
    });
}
// FUNÇÃO PARA TESTAR O DELETE NA MINHA ROTA /api/usuarios/usuario
exports.deletar = (req, res) =>{
// DEPOIS CRIAMOS UMA VARIAVEL NA FUNCTION ONDE IREMOS ESPECIFICAR QUE O idDaUrl IRA PEGAR OS PARAMETROS
// QUE PASSEI E ASSIM PROCURAR NO BANCO DE DADOS O ID CORRESPONDENTE
    let id = req.params.idDaUrl

    req.db.collection('usuarios').remove({"_id" :ObjectID(id)}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.sendStatus(200);
        }

    });
}


