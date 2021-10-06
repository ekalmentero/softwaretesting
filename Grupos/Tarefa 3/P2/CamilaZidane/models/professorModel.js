// professor.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')


function getTodosProfessoresBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM professor', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    });

 
}

//Recuperar dados de professor
function getProfessorBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM professor WHERE matricula ='+matricula, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function createProfessorBD(professor) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO professor (nome , matricula) VALUES ("'+professor.nome+'","'+professor.matricula+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deleteProfessorBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('DELETE from professor WHERE matricula=("'+matricula+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function updateProfessorBD(professor){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE professor SET nome = "'+professor.nome+'" WHERE matricula = "'+professor.matricula+'"', function (err, result) {
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
