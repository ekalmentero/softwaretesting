const fs = require("fs");
const path = require("path");
const professorTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "professor.json"))
);
const professor = jest.createMockFromModule("../professor.js");

function getProfessores() {
  return professorTodos;
}

function getProfessorByMatricula(matricula) {
  return professorTodos.find((professor) => professor.matricula == matricula);
}

async function createProfessor(professor) {
  if (professor.matricula >= 2147483647) {
    return { erro: "Professor não criado" };
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

async function updateProfessor(id, professor) {
  if (professor.matricula >= 2147483647) {
    return { erro: "Professor não alterado" };
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

async function deleteProfessor(id) {
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
  getProfessores,
  getProfessorByMatricula,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
