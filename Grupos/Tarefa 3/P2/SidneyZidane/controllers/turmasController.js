const turmaModel = require("../models/turma.js");

async function getTurmas() {
  let turmas = await turmaModel.getTurmas();
  return turmas;
}

async function getTurmaByCodigo(codigo) {
  let turma = await turmaModel.getTurmaByCodigo(codigo);
  return turma;
}

async function createTurma(turma) {
  let response = await turmaModel.createTurma(turma);
  return response;
}

async function updateTurma(id, turma) {
  let response = await turmaModel.updateTurma(id, turma);
  return response;
}

async function deleteTurma(id) {
  let response = await turmaModel.deleteTurma(id);
  return response;
}

async function getTurmasByPeriodo(id) {
  let turma = await turmaModel.getTurmasByPeriodo(id);
  return turma;
}

module.exports = {
  getTurmas,
  getTurmaByCodigo,
  createTurma,
  updateTurma,
  deleteTurma,
  getTurmasByPeriodo,
};
