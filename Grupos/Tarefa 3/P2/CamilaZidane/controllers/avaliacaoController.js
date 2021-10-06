const modelAvaliacao = require('../models/avaliacaoModel')

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function getAvaliacao (id) {
  const promise = new Promise((resolve, reject) => {

    modelAvaliacao.getAvaliacaoBD(id).then(avaliacao => {

      if (typeof avaliacao !== 'undefined' && !isEmptyObject(avaliacao)) {
        resolve(avaliacao)
        return avaliacao
      }else {
        reject(new Error ('Nenhum avaliacao com este código encontrada'))
        return 'Nenhuma avaliacao com este código encontrada'
      }
    })
  })
  return promise
}

function getTodasAvaliacoes () {
  const promise = new Promise((resolve, reject) => {

    modelAvaliacao.getTodosAvaliacaosBD().then(avaliacaos => {

      if (typeof avaliacaos !== 'undefined' && avaliacaos) {
        resolve(avaliacaos)
        return avaliacaos
      }else {
        reject(new Error('Nenhuma Avaliacao encontrada'))
        return 'Nenhuma avaliacao com  encontrada'
      }
    })
  })
  return promise
}

function createAvaliacao (dadosAvaliacao) {
const promise = new Promise((resolve, reject) => { 

      if (!(dadosAvaliacao !== null && 'turma' in dadosAvaliacao && 'aluno' in dadosAvaliacao && 'peso' in dadosAvaliacao && 'peso2' in dadosAvaliacao && 'nota' in dadosAvaliacao && 'nota2' in dadosAvaliacao)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelAvaliacao.createAvaliacaoBD(dadosAvaliacao).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao inserir avaliação"));
              }
          });
      }
  });
  return promise;

}

function deleteAvaliacao (id) {
const promise = new Promise((resolve, reject) => {
    if (!(id !== null)) {
      reject(new Error ("Dados inválidos"));
   }else if (id.toString().length !== 1 && id.toString().length !== 2){
      reject(new Error ("O id deve ter 1 ou 2 dígitos"));
   }else if (id === 0){
      reject(new Error ("O id não pode ser igual a 0"));
   }

   else{
    modelAvaliacao.deleteAvaliacaoBD(id).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }
      })
   }
  })
  return promise
}

function updateAvaliacao (dadosAvaliacao) {
const promise = new Promise((resolve, reject) => { 

  if (!(dadosAvaliacao !== null && 'id' in dadosAvaliacao && 'turma' in dadosAvaliacao && 'aluno' in dadosAvaliacao && 'peso' in dadosAvaliacao && 'peso2' in dadosAvaliacao && 'nota' in dadosAvaliacao && 'nota2' in dadosAvaliacao)) {
    reject(new Error ("Dados incompletos"));
      }
      else {
        modelAvaliacao.updateAvaliacaoBD(dadosAvaliacao).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao atualizar avaliação"));
              }
          });
      }
  });
  return promise;

}

module.exports = {
  getAvaliacao,
  getTodasAvaliacoes,
  createAvaliacao,
  deleteAvaliacao,
updateAvaliacao}
