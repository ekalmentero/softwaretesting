const disciplinaModel = require("../models/disciplina.js");

async function getDisciplinas() {
  let disciplinas = await disciplinaModel.getDisciplinas();
  return disciplinas;
}

async function getDisciplinaByCodigo(codigo) {
  let disciplina = await disciplinaModel.getDisciplinaByCodigo(codigo);
  return disciplina;
}

async function createDisciplina(disciplina) {
  let response = await disciplinaModel.createDisciplina(disciplina);
  return response;
}

async function updateDisciplina(id, disciplina) {
  let response = await disciplinaModel.updateDisciplina(id, disciplina);
  return response;
}

async function deleteDisciplina(id) {
  let response = await disciplinaModel.deleteDisciplina(id);
  return response;
}

module.exports = {
  getDisciplinas,
  getDisciplinaByCodigo,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
};
