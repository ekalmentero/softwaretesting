// aluno.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../BD/conexao')

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
function consultarAlunoBD(matricula) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM aluno WHERE matricula ='+matricula, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function iserirAlunoBD(aluno) {
    
    conexao.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        console.log('connected as id ' + conexao.threadId);
    });
      
    console.log("recebida requisição inserir aluno no modelo");

    const minhaQuery = 'INSERT INTO aluno (matricula, nome, data_nascimento, email) VALUES ("'+aluno.matricula+'","'+aluno.nome+'","'+aluno.data_nascimento+'","'+aluno.email+'")';
    
    console.log("query executada:"+minhaQuery);

    return new Promise(function(resolve, reject) {
        conexao.query(minhaQuery, function (err, result) {
            if (err) throw reject(err.message);
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
    consultarAlunoBD,
    iserirAlunoBD,
    deletarAlunoBD,
    atualizarAlunoBD
}
