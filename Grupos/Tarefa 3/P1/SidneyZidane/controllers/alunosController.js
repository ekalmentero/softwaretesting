const alunoModel = require("../models/aluno.js");

async function getAlunos() {
  let alunos = await alunoModel.getAlunos();
  return alunos;
}

async function getAlunoByMatricula(matricula) {
  let alunos = await alunoModel.getAlunoByMatricula(matricula);
  return alunos;
}

async function createAluno(aluno) {
  let response = await alunoModel.createAluno(aluno);
  return response;
}

async function updateAluno(id, aluno) {
  let response = await alunoModel.updateAluno(id, aluno);
  return response;
}

async function deleteAluno(id) {
  let response = await alunoModel.deleteAluno(id);
  return response;
}

module.exports = {
  getAlunos,
  getAlunoByMatricula,
  createAluno,
  updateAluno,
  deleteAluno,
};
