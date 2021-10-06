const modelAluno = require('../models/alunoModel')

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function getAluno (matricula) {
  const promise = new Promise((resolve, reject) => {

    modelAluno.getAlunoBD(matricula).then(aluno => {

      if (typeof aluno !== 'undefined' && !isEmptyObject(aluno)) {
        resolve(aluno)
        return aluno
      }else {
        reject(new Error('Nenhum aluno com esta matrícula encontrado'))
        return 'Aluno não encontrado'
      }
    })
  })
  return promise
}

function getTodosAlunos () {
  const promise = new Promise((resolve, reject) => {

    modelAluno.getTodosAlunosBD().then(alunos => {

      if (typeof alunos !== 'undefined' && alunos) {
        resolve(alunos)
        return alunos
      }else {
        reject(new Error('Nenhum aluno encontrado'))
        return 'Não foi possível retornar todos os alunos'
      }
    })
  })
  return promise
}




function createAluno(dadosAluno){
  const promise = new Promise((resolve, reject) => { 

      if (!(dadosAluno !== null && 'matricula' in dadosAluno && 'nome' in dadosAluno)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
          modelAluno.createAlunoBD(dadosAluno).then( resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao inserir aluno"));
              }
          });
      }
  });
  return promise;
}


function deleteAluno (matricula) {
  const promise = new Promise((resolve, reject) => {
    if (!(matricula !== null)) {
      reject(new Error ("Dados inválidos"));
   }else if (matricula.toString().length !== 10){
    reject(new Error ("A matricula deve conter 10 dígitos"));
     
   }
   else{
      modelAluno.deleteAlunoBD(matricula).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }else{          
          reject(new Error("Falha ao atualizar aluno"));
      }
      })
   }
  })
  return promise
}

function updateAluno (aluno) {

    const promise = new Promise((resolve, reject) => { 

      if (!(aluno !== null && 'matricula' in aluno && 'nome' in aluno)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
          modelAluno.updateAlunoBD(aluno).then( resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao atualizar aluno"));
              }
          });
      }
  });
  return promise;
}

module.exports = {
  getAluno,
  getTodosAlunos,
  createAluno,
  deleteAluno,
updateAluno}
