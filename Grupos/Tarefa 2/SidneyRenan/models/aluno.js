// aluno.js componente da camada de modelo da nossa arquitetura MVC

const fs = require('fs')
const path = require("path");
const db = require("./db");

async function getTodos() {
    try {
        //acesso a recurso (disco) poderia ser banco de dados
        // const jsonString = fs.readFileSync(path.resolve(__dirname, "../models/alunos.json"));
        const alunos = await db.selectAlunos();
        return alunos;
    } catch(err) {
        console.log(err)
        return
    }
}

//Recuperar dados de aluno
async function getAluno(matricula) {
    try {
        //Simulando acesso ao BD com a leitura de um arquivo
        // const jsonString = fs.readFileSync(path.resolve(__dirname, "../models/alunos.json"));
        // let alunos = JSON.parse(jsonString);
        const aluno = await db.selectAluno(matricula);
        return aluno;
    } catch(err) {
        console.log(err)
        return
    }
}

module.exports = {
    getAluno,
    getTodos
}
