const periodoModel = require("../models/periodo.js");

async function getPeriodos() {
  let periodos = await periodoModel.getPeriodos();
  return periodos;
}

async function getPeriodoByID(id) {
  let periodos = await periodoModel.getPeriodoByID(id);
  return periodos;
}

async function createPeriodo(periodo) {
  let response = await periodoModel.createPeriodo(periodo);
  return response;
}

async function updatePeriodo(id, periodo) {
  let response = await periodoModel.updatePeriodo(id, periodo);
  return response;
}

async function deletePeriodo(id) {
  let response = await periodoModel.deletePeriodo(id);
  return response;
}

module.exports = {
  getPeriodos,
  getPeriodoByID,
  createPeriodo,
  updatePeriodo,
  deletePeriodo,
};
