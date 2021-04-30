// avaliacao.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodasAvaliacoesBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM avaliacao WHERE ativo = true', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        
        });
    }); 
}

function getAvaliacaoBD(id) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM avaliacao WHERE ativo = true AND id ='+id, function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function createAvaliacaoBD(avaliacao) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO avaliacao (nota, peso, id_turma, id_aluno) VALUES ('+avaliacao.nota+', '+avaliacao.peso+', '+avaliacao.id_turma+', '+avaliacao.id_aluno+')', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function deleteAvaliacaoBD(id) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE avaliacao SET ativo = false WHERE id=('+id+')', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function updateAvaliacaoBD(avaliacao){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE avaliacao SET nota = '+avaliacao.nota+', peso = '+avaliacao.peso+', id_turma = '+avaliacao.id_turma+', id_aluno = '+avaliacao.id_aluno+' WHERE ativo = true AND id = '+avaliacao.id, function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}



module.exports = {
    getTodasAvaliacoesBD,
    getAvaliacaoBD,
    createAvaliacaoBD,
    deleteAvaliacaoBD,
    updateAvaliacaoBD
}
