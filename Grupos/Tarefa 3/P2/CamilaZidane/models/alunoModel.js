// aluno.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

const fs = require('fs')
const path = require("path");


function getTodosAlunosBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    });

 
}

//Recuperar dados de aluno
function getAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno WHERE matricula ='+matricula, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}


function createAlunoBD(aluno) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO aluno (nome , matricula) VALUES ("'+aluno.nome+'","'+aluno.matricula+'")', function (err, result) {
            if (err){
                reject(new Error (err.message));

            } else{
                resolve(result);
                return 1;
            }
        });
    });
}

function deleteAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('DELETE from aluno WHERE matricula ='+matricula, function (err, result) {
            if (err){
                throw reject(err);
                

            } else{
                resolve(result);
                return 1;
            }
        });
    });
}

function updateAlunoBD(aluno){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE aluno SET nome = "'+aluno.nome+'" WHERE matricula = "'+aluno.matricula+'"', function (err, result) {
            if (err){
                throw reject(err);

            } else{
                resolve(result);
                return 1;
            }
        });
    });
}


module.exports = {
    getTodosAlunosBD,
    getAlunoBD,
    createAlunoBD,
    deleteAlunoBD,
    updateAlunoBD
}
