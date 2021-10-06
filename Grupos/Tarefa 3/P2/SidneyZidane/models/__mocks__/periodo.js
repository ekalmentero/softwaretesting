const fs = require("fs");
const path = require("path");
const periodosTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "periodos.json"))
);
const periodo = jest.createMockFromModule("../periodo.js");

function getPeriodos() {
  return periodosTodos;
}

function getPeriodoByID(id) {
  return periodosTodos.find((periodo) => periodo.periodo_ID == id);
}

async function createPeriodo(periodo) {
  if (periodo.ano >= 2147483647 || periodo.semestre >= 2147483647) {
    return { erro: "Periodo não criado" };
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

async function updatePeriodo(id, periodo) {
  if (periodo.ano >= 2147483647 || periodo.semestre >= 2147483647) {
    return { erro: "Periodo não alterado" };
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

async function deletePeriodo(id) {
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
  getPeriodos,
  getPeriodoByID,
  createPeriodo,
  updatePeriodo,
  deletePeriodo,
};
