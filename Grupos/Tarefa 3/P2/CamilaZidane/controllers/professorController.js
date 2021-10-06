
const modelProfessor = require('../models/professorModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getProfessor(matricula){
  const promise = new Promise((resolve, reject) => {

    modelProfessor.getProfessorBD(matricula).then( professor => {

      if (typeof professor !== 'undefined' && !isEmptyObject(professor)) {
        resolve(professor)
        return professor
      }else {
        reject(new Error('Nenhum professor com esta matrícula encontrado'))
        return 'professor não encontrado'
      }
    })
  })
  return promise
}

function getTodosProfessores(){
  const promise = new Promise((resolve, reject) => {

    modelProfessor.getTodosProfessoresBD().then( professores => {

      if (typeof professores !== 'undefined' && professores) {
        resolve(professores)
        return professores
      }else {
        reject(new Error('Nenhum professor encontrado'))
        return 'Não foi possível retornar todos os professores'
      }
    })
  })
  return promise
    
}

function createProfessor(dadosProfessor){
  const promise = new Promise((resolve, reject) => { 

      if (!(dadosProfessor !== null && 'matricula' in dadosProfessor && 'nome' in dadosProfessor)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelProfessor.createProfessorBD(dadosProfessor).then( resultado => {
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

function deleteProfessor(matricula){
  const promise = new Promise((resolve, reject) => {
    if (!(matricula !== null)) {
      reject(new Error ("Dados inválidos"));
   }else if (matricula.toString().length != 10){
    reject(new Error ("A matricula deve conter 10 dígitos"));
     
   }
   else{
    modelProfessor.deleteProfessorBD(matricula).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }
      })
   }
  })
  return promise
}

function updateProfessor(professor){

    const promise = new Promise((resolve, reject) => { 

      if (!(professor !== null && 'matricula' in professor && 'nome' in professor)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelProfessor.updateProfessorBD(professor).then(resultado => {
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
    getProfessor,
    getTodosProfessores,
    createProfessor,
    deleteProfessor,
    updateProfessor
   
    
}
