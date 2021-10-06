const modelTurma = require('../models/turmaModel')

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function getTurma (codigo) {
  const promise = new Promise((resolve, reject) => {

    modelTurma.getTurmaBD(codigo).then(turma => {

      if (typeof turma !== 'undefined' && !isEmptyObject(turma)) {
        console.log(turma);
        resolve(turma)
      }else {
        reject('Nenhum turma com este código encontrado')
      }
    })
  })
  return promise
}

function getTodosTurmas () {
  const promise = new Promise((resolve, reject) => {

    modelTurma.getTodosTurmasBD().then(turmas => {

      if (typeof turmas !== 'undefined' && turmas) {
        console.log(turmas);
        resolve(turmas)
      }else {
        reject(new Error('Nenhum turma encontrado'))
      }
    })
  })
  return promise
}

function createTurma (dadosturma) {
  const promise = new Promise((resolve, reject) => {
    modelTurma.createTurmaBD(dadosturma).then(resultado => {
      if (resultado.affectedRows == 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao inserir turma'))
      }
    })
  })
  return promise
}

function deleteTurma (codigo) {
  const promise = new Promise((resolve, reject) => {
    modelTurma.deleteTurmaBD(codigo).then(resultado => {
      if (resultado.affectedRows >= 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao remover turma/turma não encontrado'))
      }
    })
  })
  return promise
}

function updateTurma (codigo) {
  const promise = new Promise((resolve, reject) => {
    modelTurma.updateTurmaBD(turma).then(resultado => {
      if (resultado.affectedRows == 1) {
        resolve(resultado)
      }else {
        reject(new Error('Falha ao atualizar turma/turma não encontrado'))
      }
    })
      .catch(resultado => console.log('Erro atualizar modelo turma' + resultado))
  })
  return promise
}

module.exports = {
  getTurma,
  getTodosTurmas,
  createTurma,
  deleteTurma,
updateTurma}
