const professorModel = require("../models/professor.js");

async function getProfessores() {
  let professores = await professorModel.getProfessores();
  return professores;
}

async function getProfessorByMatricula(matricula) {
  let professor = await professorModel.getProfessorByMatricula(matricula);
  return professor;
}

async function createProfessor(professor) {
  let response = await professorModel.createProfessor(professor);
  return response;
}

async function updateProfessor(id, professor) {
  let response = await professorModel.updateProfessor(id, professor);
  return response;
}

async function deleteProfessor(id) {
  let response = await professorModel.deleteProfessor(id);
  return response;
}

module.exports = {
  getProfessores,
  getProfessorByMatricula,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
