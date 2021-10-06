const fs = require("fs");
const path = require("path");
const avaliacoesTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "avaliacoes.json"))
);
const avaliacao = jest.createMockFromModule("../avaliacao.js");

function getAvaliacoes() {
  return avaliacoesTodos;
}

function getAvaliacaoByID(id) {
  return avaliacoesTodos.find((avaliacao) => avaliacao.id == id);
}

async function createAvaliacao(avaliacao) {
  if (avaliacao.id >= 2147483647) {
    return { erro: "Avaliacao não criada" };
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

async function updateAvaliacao(id, aluno) {
  if (avaliacao.id >= 2147483647) {
    return { erro: "Avaliacao não alterada" };
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

async function deleteAvaliacao(id) {
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
  getAvaliacoes,
  getAvaliacaoByID,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
