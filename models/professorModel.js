// professor.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodosProfessoresBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM professor WHERE ativo = true', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    }); 
}

function getProfessorBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM professor WHERE ativo = true AND matricula ="'+matricula+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function createProfessorBD(professor) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO professor (matricula, nome) VALUES ("'+professor.matricula+'","'+professor.nome+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deleteProfessorBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE professor SET ativo = false WHERE matricula=("'+matricula+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function updateProfessorBD(professor){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE professor SET nome = "'+professor.nome+'" WHERE ativo = true AND matricula = "'+professor.matricula+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}


module.exports = {
    getTodosProfessoresBD,
    getProfessorBD,
    createProfessorBD,
    deleteProfessorBD,
    updateProfessorBD
}
