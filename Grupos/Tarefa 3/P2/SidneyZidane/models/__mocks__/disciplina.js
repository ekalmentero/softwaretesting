const fs = require("fs");
const path = require("path");
const disciplinaTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "disciplinas.json"))
);
const disciplina = jest.createMockFromModule("../disciplina.js");

function getDisciplinas() {
  return disciplinaTodos;
}

function getDisciplinaByCodigo(codigo) {
  return disciplinaTodos.find((disciplina) => disciplina.codigo == codigo);
}

async function createDisciplina(disciplina) {
  if (disciplina.codigo >= 2147483647) {
    return { erro: "Disciplina não criada" };
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

async function updateDisciplina(id, disciplina) {
  if (disciplina.codigo >= 2147483647) {
    return { erro: "Disciplina não alterada" };
  }
  if (id == 2) {
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

async function deleteDisciplina(id) {
  if (id == 2) {
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
  getDisciplinas,
  getDisciplinaByCodigo,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
};
