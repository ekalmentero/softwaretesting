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

module.exports = {
    getTodosAlunosBD,
    getAlunoBD
}
