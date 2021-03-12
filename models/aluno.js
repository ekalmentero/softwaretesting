// aluno.js componente da camada de modelo da nossa arquitetura MVC

const fs = require('fs')
const path = require("path");


function getTodos() {
    try {
        //acesso a recurso (disco) poderia ser banco de dados
        const jsonString = fs.readFileSync(path.resolve(__dirname, "../models/alunos.json"));
        return JSON.parse(jsonString)
    } catch(err) {
        console.log(err)
        return
    }
}

//Recuperar dados de aluno
function getAluno(matricula) {
    try {
        //Simulando acesso ao BD com a leitura de um arquivo
        const jsonString = fs.readFileSync(path.resolve(__dirname, "../models/alunos.json"));
        let alunos = JSON.parse(jsonString);
        alunoSelecionado = "";
        alunos.forEach(function (item, index) {
            if (item.matricula == matricula){
                alunoSelecionado = item;
            }
        });
        return alunoSelecionado;
    } catch(err) {
        console.log(err)
        return
    }
}

module.exports = {
    getAluno,
    getTodos
}
