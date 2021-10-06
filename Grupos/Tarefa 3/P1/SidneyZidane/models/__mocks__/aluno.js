20
const fs = require('fs');
const path = require("path");
const alunosTodos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../alunos.json")));
const aluno = jest.createMockFromModule('../aluno.js');

function getTodos() {
  return (
    [{
        "matricula": 715752,
        "nome": "Lana"
    }, {
        "matricula": 684958,
        "nome": "Lanita"
    }, {
        "matricula": 695665,
        "nome": "Barbabra"
    }, {
        "matricula": 701677,
        "nome": "Abba"
    }, {
        "matricula": 665444,
        "nome": "Lurleen"
    }, {
        "matricula": 654384,
        "nome": "Melli"
    }, {
        "matricula": 721653,
        "nome": "Margot"
    }, {
        "matricula": 733699,
        "nome": "Arlee"
    }, {
        "matricula": 727993,
        "nome": "Findley"
    }, {
        "matricula": 702409,
        "nome": "Tory"
    }]
  )
}


function getAluno(matricula) {
  return alunosTodos.find(aluno => aluno.matricula == matricula);
}


module.exports = {
    getAluno,
    getTodos
}