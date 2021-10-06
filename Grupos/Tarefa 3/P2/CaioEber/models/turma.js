// turma.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodasTurmasBD() {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM turma WHERE ativo = true', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        
        });
    }); 
}

function getTurmaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT * FROM turma WHERE ativo = true AND codigo ="'+codigo+'"', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function createTurmaBD(turma) {
    return new Promise(function(resolve, reject) {
        conexao.query('INSERT INTO turma (codigo, id_periodo, id_professor, id_disciplina) VALUES ("'+turma.codigo+'", '+turma.id_periodo+', '+turma.id_professor+', '+turma.id_disciplina+')', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function deleteTurmaBD(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE turma SET ativo = false WHERE codigo=("'+codigo+'")', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function updateTurmaBD(turma){
    return new Promise(function(resolve, reject) {
        conexao.query('UPDATE turma SET id_periodo = '+turma.id_periodo+', id_professor = '+turma.id_professor+', id_disciplina = '+turma.id_disciplina+' WHERE ativo = true AND codigo = "'+turma.codigo+'"', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

function getMediaTurma(codigo) {
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT av.peso AS peso, av.nota AS nota FROM avaliacao av INNER JOIN turma t ON t.id=av.id_turma WHERE t.ativo = TRUE AND av.ativo = TRUE AND t.codigo="'+ codigo + '"', function (err, result) {
            if (err) reject(new Error (err.message));
            resolve(result);
        });
    });
}

module.exports = {
    getTodasTurmasBD,
    getTurmaBD,
    createTurmaBD,
    deleteTurmaBD,
    updateTurmaBD,
    getMediaTurma
}
