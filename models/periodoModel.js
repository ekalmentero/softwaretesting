// periodo.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodosPeriodosBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM periodo WHERE ativo = true', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    }); 
}

function getPeriodoBD(id) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM periodo WHERE ativo = true AND id ='+id, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function createPeriodoBD(periodo) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO periodo (ano, semestre) VALUES ('+periodo.ano+','+periodo.semestre+')', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deletePeriodoBD(id) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE periodo SET ativo = false WHERE id='+id, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function updatePeriodoBD(periodo){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE periodo SET ano = '+periodo.ano+', semestre = '+periodo.semestre+' WHERE ativo = true AND id = '+periodo.id, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}



module.exports = {
    getTodosPeriodosBD,
    getPeriodoBD,
    createPeriodoBD,
    deletePeriodoBD,
    updatePeriodoBD
}
