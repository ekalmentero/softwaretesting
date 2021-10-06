const sqlite = require('sqlite-sync');

function cb(a) {
    return a;
}

function getAluno(matricula) {
    try {
        sqlite.connect('/home/caio/Área de trabalho/testeSoftware/trabalho2/models/alunos.db');
        let query = `SELECT nome, matricula FROM alunos WHERE matricula = ?`;
        let resultado = sqlite.run(query, [matricula]);
        
        return resultado[0];
    } catch (err) {
        console.error(err);
        return;
    }
}

function getTodos() {
    try {
        let alunos = [];
        sqlite.connect('/home/caio/Área de trabalho/testeSoftware/trabalho2/models/alunos.db');
        let query = `SELECT nome, matricula FROM alunos ORDER BY matricula`;
        let resultados = sqlite.run(query, []);

        resultados.forEach((resultado) => {
            let aluno = {
                nome: resultado.nome,
                matricula: resultado.matricula
            };
            alunos.push(aluno);
        });
        
        return alunos;
    } catch (err) {
        console.error(err);
        return;
    }
}

module.exports = {
    getAluno,
    getTodos
}