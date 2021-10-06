const modelAvaliacao = require('../models/avaliacaoModel')

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function getAvaliacao (id) {
  const promise = new Promise((resolve, reject) => {

    modelAvaliacao.getAvaliacaoBD(id).then(avaliacao => {

      if (typeof avaliacao !== 'undefined' && !isEmptyObject(avaliacao)) {
        console.log(avaliacao);
        resolve(avaliacao)
      }else {
        reject('Nenhum avaliacao com este código encontrado')
      }
    })
  })
  return promise
}

function getTodosAvaliacaos () {
  const promise = new Promise((resolve, reject) => {

    modelAvaliacao.getTodosAvaliacaosBD().then(avaliacaos => {

      if (typeof avaliacaos !== 'undefined' && avaliacaos) {
        console.log(avaliacaos);
        resolve(avaliacaos)
      }else {
        reject(new Error('Nenhum Avaliacao encontrado'))
      }
    })
  })
  return promise
}

function createAvaliacao (dadosAvaliacao) {
  const promise = new Promise((resolve, reject) => {
    modelAvaliacao.createAvaliacaoBD(dadosAvaliacao).then(resultado => {
      if (resultado.affectedRows == 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao inserir Avaliacao'))
      }
    })
  })
  return promise
}

function deleteAvaliacao (id) {
  const promise = new Promise((resolve, reject) => {
    modelAvaliacao.deleteAvaliacaoBD(id).then(resultado => {
      if (resultado.affectedRows >= 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao remover Avaliacao/Avaliacao não encontrado'))
      }
    })
  })
  return promise
}

function updateAvaliacao (id) {
  const promise = new Promise((resolve, reject) => {
    modelAvaliacao.updateAvaliacaoBD(avaliacao).then(resultado => {
      if (resultado.affectedRows == 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao atualizar Avaliacao/Avaliacao não encontrado'))
      }
    })
      .catch(resultado => console.log('Erro atualizar modelo Avaliacao' + resultado))
  })
  return promise
}

module.exports = {
  getAvaliacao,
  getTodosAvaliacaos,
  createAvaliacao,
  deleteAvaliacao,
updateAvaliacao}
