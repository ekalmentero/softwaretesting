// disciplina.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodasDisciplinasBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM disciplina WHERE ativo = true', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        
        });
    }); 
}

function getDisciplinaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM disciplina WHERE ativo = true AND codigo ="'+codigo+'"', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function createDisciplinaBD(disciplina) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO disciplina (codigo, nome) VALUES ("'+disciplina.codigo+'","'+disciplina.nome+'")', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function deleteDisciplinaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE disciplina SET ativo = false WHERE codigo=("'+codigo+'")', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function updateDisciplinaBD(disciplina){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE disciplina SET nome = "'+disciplina.nome+'" WHERE ativo = true AND codigo = "'+disciplina.codigo+'"', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}



module.exports = {
    getTodasDisciplinasBD,
    getDisciplinaBD,
    createDisciplinaBD,
    deleteDisciplinaBD,
    updateDisciplinaBD
}
