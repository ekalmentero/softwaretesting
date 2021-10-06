// disciplina.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')


function getTodosDisciplinasBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM disciplina', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        
        });
    });

 
}

//Recuperar dados de disciplina
function getDisciplinaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM disciplina WHERE codigo ='+codigo, function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function createDisciplinaBD(disciplina) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO disciplina (codigo, nome) VALUES ("'+disciplina.codigo+'","'+disciplina.nome+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function deleteDisciplinaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('DELETE from disciplina WHERE codigo=("'+codigo+'")', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}

function updateDisciplinaBD(disciplina){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE disciplina SET nome = "'+disciplina.nome+'" WHERE codigo = "'+disciplina.codigo+'"', function (err, result) {
            if (err) throw reject(err);
            resolve(result);
        });
    });
}


module.exports = {
    getTodosDisciplinasBD,
    getDisciplinaBD,
    createDisciplinaBD,
    deleteDisciplinaBD,
    updateDisciplinaBD
}
