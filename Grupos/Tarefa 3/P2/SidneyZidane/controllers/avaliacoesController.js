const avaliacaoModel = require("../models/avaliacao.js");

async function getAvaliacoes() {
  let avaliacao = await avaliacaoModel.getAvaliacoes();
  return avaliacao;
}

async function getAvaliacaoByID(id) {
  let avaliacao = await avaliacaoModel.getAvaliacaoByID(id);
  return avaliacao;
}

async function createAvaliacao(avaliacao) {
  let response = await avaliacaoModel.createAvaliacao(avaliacao);
  return response;
}

async function updateAvaliacao(id, avaliacao) {
  let response = await avaliacaoModel.updateAvaliacao(id, avaliacao);
  return response;
}

async function deleteAvaliacao(id) {
  let response = await avaliacaoModel.deleteAvaliacao(id);
  return response;
}

async function getAvaliacoesByAluno(id) {
  let avaliacoes = await avaliacaoModel.getAvaliacoesByAluno(id);
  return avaliacoes;
}

async function getCrCalcByAluno(id) {
  let totalNota = 0;
  let totalPeso = 0;
  let avaliacoes = await avaliacaoModel.getAvaliacoesByAluno(id);
  avaliacoes.forEach((avaliacao) => {
    totalNota += avaliacao.nota * avaliacao.peso;
    totalPeso += avaliacao.peso;
  });
  return totalNota / totalPeso;
}

async function getCrCalcByAlunoAndPeriodo(aluno_ID, periodo_ID) {
  let totalNota = 0;
  let totalPeso = 0;
  let avaliacoes = await avaliacaoModel.getAvaliacoesByAlunoAndPeriodo(
    aluno_ID,
    periodo_ID
  );
  avaliacoes.forEach((avaliacao) => {
    totalNota += avaliacao.nota * avaliacao.peso;
    totalPeso += avaliacao.peso;
  });
  return totalNota / totalPeso;
}

async function getMediaByTurma(id) {
  let totalNota = 0;
  let totalPeso = 0;
  let avaliacoes = await avaliacaoModel.getAvaliacoesByTurma(id);
  avaliacoes.forEach((avaliacao) => {
    totalNota += avaliacao.nota * avaliacao.peso;
    totalPeso += avaliacao.peso;
  });
  return totalNota / totalPeso;
}

async function getAlunoStatus(aluno_ID, turma_ID) {
  let totalNota = 0;
  let totalPeso = 0;
  let avaliacoes = await avaliacaoModel.getAvaliacoesByAlunoAndTurma(
    aluno_ID,
    turma_ID
  );
  avaliacoes.forEach((avaliacao) => {
    totalNota += avaliacao.nota * avaliacao.peso;
    totalPeso += avaliacao.peso;
  });
  let nota = totalNota / totalPeso;
  if (!nota) return "Não cursado";
  if (nota >= 5) return "Aprovado";
  return "Reprovado";
}

module.exports = {
  getAvaliacoes,
  getAvaliacaoByID,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
  getAvaliacoesByAluno,
  getCrCalcByAluno,
  getCrCalcByAlunoAndPeriodo,
  getMediaByTurma,
  getAlunoStatus,
};
