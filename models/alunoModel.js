// aluno.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodosAlunosBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno WHERE ativo = true', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    }); 
}

function getAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno WHERE ativo = true AND matricula ="'+matricula+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function createAlunoBD(aluno) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO aluno (matricula, nome) VALUES ("'+aluno.matricula+'","'+aluno.nome+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deleteAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE aluno SET ativo = false WHERE matricula=("'+matricula+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function updateAlunoBD(aluno){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE aluno SET nome = "'+aluno.nome+'" WHERE ativo = true AND matricula = "'+aluno.matricula+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function getAvaliacoesByAluno(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT av.nota AS nota, av.peso AS peso FROM avaliacao av INNER JOIN aluno al ON al.id=av.id_aluno WHERE al.ativo = TRUE AND av.ativo = TRUE AND al.matricula = ' + matricula, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function getAvaliacoesByAlunoByPeriodo(matricula, ano, semestre) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT av.nota AS nota, av.peso AS peso FROM avaliacao av INNER JOIN aluno al ON al.id=av.id_aluno INNER JOIN turma t ON t.id = av.id_turma INNER JOIN periodo p ON p.id = t.id_periodo WHERE al.ativo = TRUE AND av.ativo = TRUE AND t.ativo = TRUE AND p.ativo = TRUE AND al.matricula = "' + matricula + '" AND p.ano = ' + ano + ' AND p.semestre = ' + semestre, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function getSituacao(matricula, codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT av.nota AS nota, av.peso AS peso FROM avaliacao av INNER JOIN aluno al ON al.id=av.id_aluno INNER JOIN turma t ON t.id = av.id_turma WHERE al.ativo = TRUE AND av.ativo = TRUE AND t.ativo = TRUE AND al.matricula = "' + matricula + '" AND t.codigo = "' + codigo + '"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    getTodosAlunosBD,
    getAlunoBD,
    createAlunoBD,
    deleteAlunoBD,
    updateAlunoBD,
    getAvaliacoesByAluno,
    getAvaliacoesByAlunoByPeriodo,
    getSituacao
}
