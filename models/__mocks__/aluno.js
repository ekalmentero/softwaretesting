
const aluno = jest.createMockFromModule('../aluno.js');

function getTodos() {
    //todo
}


function getAluno(matricula) {
    return ({
        matricula: 715752,
        nome: 'Abba',
    });
}


module.exports = {
    getAluno,
    getTodos
}