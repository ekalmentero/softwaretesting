const modelTurma = require('../models/turmaModel')

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function getTurma (codigo) {
  const promise = new Promise((resolve, reject) => {

    modelTurma.getTurmaBD(codigo).then(turma => {

      if (typeof turma !== 'undefined' && !isEmptyObject(turma)) {
        resolve(turma)
        return turma

      }else {
        reject(new Error('Nenhum turma com este código encontrado'))
        return 'Turma não encontrada'
      }
    })
  })
  return promise
}

function getTodasTurmas () {
  const promise = new Promise((resolve, reject) => {

    modelTurma.getTodosTurmasBD().then(turmas => {

      if (typeof turmas !== 'undefined' && turmas) {
        resolve(turmas)
        return turmas
      }else {
        reject(new Error('Nenhum turma encontrado'))
        return 'Não foi possível retornar todas as turmas'
      }
    })
  })
  return promise
}

function createTurma (dadosturma) {
const promise = new Promise((resolve, reject) => { 

      if (!(dadosturma !== null && 'codigo' in dadosturma && 'professor' in dadosturma && 'disciplina' in dadosturma && 'periodo' in dadosturma)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelTurma.createTurmaBD(dadosturma).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao inserir turma"));
              }
          });
      }
  });
  return promise;
}

function deleteTurma (codigo) {
const promise = new Promise((resolve, reject) => {
    if (!(codigo !== null)) {
      reject(new Error ("Dados inválidos"));
   }else if (codigo.toString().length !== 2){
      reject(new Error ("O codigo deve ter 1 ou 2 dígitos"));
   }else if (codigo === 0){
      reject(new Error ("O codigo não pode ser igual a 0"));
   }

   else{
    modelTurma.deleteTurmaBD(codigo).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }
      })
   }
  })
  return promise
}

function updateTurma (dadosturma) {
const promise = new Promise((resolve, reject) => { 

  if (!(dadosturma !== null && 'codigo' in dadosturma && 'professor' in dadosturma && 'disciplina' in dadosturma && 'periodo' in dadosturma)) {
    reject(new Error ("Dados incompletos"));
      }
      else {
        modelTurma.updateTurmaBD(dadosturma).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao atualizar turmas"));
              }
          });
      }
  });
  return promise;
}

module.exports = {
  getTurma,
  getTodasTurmas,
  createTurma,
  deleteTurma,
updateTurma}
