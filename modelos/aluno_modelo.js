// aluno.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao')

const fs = require('fs')
const path = require("path");


function lerTodosAlunosBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    });

 
}

//Recuperar dados de aluno
function lerAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno WHERE matricula ='+matricula, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function criarAlunoBD(aluno) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO aluno (matricula, nome) VALUES ("'+aluno.matricula+'","'+aluno.nome+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deletarAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('DELETE from aluno WHERE matricula=("'+matricula+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function atualizarAlunoBD(aluno){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE aluno SET nome = "'+aluno.nome+'" WHERE matricula = "'+aluno.matricula+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}


module.exports = {
    lerTodosAlunosBD,
    lerAlunoBD,
    criarAlunoBD,
    deletarAlunoBD,
    atualizarAlunoBD
}
