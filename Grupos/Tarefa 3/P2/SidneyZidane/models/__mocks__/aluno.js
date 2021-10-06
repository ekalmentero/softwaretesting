const fs = require("fs");
const path = require("path");
const alunosTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "alunos.json"))
);
const aluno = jest.createMockFromModule("../aluno.js");

function getAlunos() {
  return alunosTodos;
}

function getAlunoByMatricula(matricula) {
  return alunosTodos.find((aluno) => aluno.matricula == matricula);
}

async function createAluno(aluno) {
  if (aluno.matricula >= 2147483647) {
    return { erro: "Aluno não criado" };
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 1,
      info: "",
      serverStatus: 2,
      warningStatus: 0,
    },
    null,
  ];
}

async function updateAluno(id, aluno) {
  if (aluno.matricula >= 2147483647) {
    return { erro: "Aluno não alterado" };
  }
  if (id == 15) {
    return [
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        info: "Rows matched: 0  Changed: 0  Warnings: 0",
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 1,
      },
      null,
    ];
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: "Rows matched: 1  Changed: 1  Warnings: 0",
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 1,
    },
    null,
  ];
}

async function deleteAluno(id) {
  if (id == 36) {
    return [
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        info: "",
        serverStatus: 2,
        warningStatus: 0,
      },
      null,
    ];
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: "",
      serverStatus: 2,
      warningStatus: 0,
    },
    null,
  ];
}

module.exports = {
  getAlunos,
  getAlunoByMatricula,
  createAluno,
  updateAluno,
  deleteAluno,
};
