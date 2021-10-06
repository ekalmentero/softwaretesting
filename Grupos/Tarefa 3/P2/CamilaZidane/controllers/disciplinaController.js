
const modelDisciplina = require('../models/DisciplinaModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getDisciplina(codigo){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getDisciplinaBD(codigo).then( Disciplina => {
            
            if (typeof Disciplina  !== 'undefined' && !isEmptyObject(Disciplina)) { 
                resolve(Disciplina);
                return Disciplina
            } 
            else { 
                reject(new Error("Nenhuma disciplina com este código encontrada"));
                return 'Disciplina não encontrada'
            } 
         
        });
         
    });
    return promise;
}


function getTodasDisciplinas(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getTodosDisciplinasBD().then( disciplinas => {
            
           if (typeof disciplinas  !== 'undefined' && disciplinas) { 
                console.log(disciplinas);
                resolve(disciplinas);
                return disciplinas
            } 
            else { 
                reject(new Error("Nenhum Disciplina encontrado"));
                return 'Não foi possível retornar todas as disciplinas'
            } 
            
        });
    });
    return promise;
}

function createDisciplina(dadosDisciplina){
const promise = new Promise((resolve, reject) => { 

      if (!(dadosDisciplina !== null && 'codigo' in dadosDisciplina && 'nome' in dadosDisciplina)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelDisciplina.createDisciplinaBD(dadosDisciplina).then( resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao inserir Disciplina"));
              }
          });
      }
  });
  return promise;
}


function deleteDisciplina(codigo){
const promise = new Promise((resolve, reject) => {
    if (!(codigo !== null)) {
      reject(new Error ("Dados inválidos"));
   }else if (codigo.toString().length !== 3){
    reject(new Error ("O código deve conter 3 dígitos"));
     
   }
   else{
    modelDisciplina.deleteDisciplinaBD(codigo).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }
      })
   }
  })
  return promise
}

function updateDisciplina(Disciplina){
const promise = new Promise((resolve, reject) => { 

      if (!(Disciplina !== null && 'codigo' in Disciplina && 'nome' in Disciplina)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelDisciplina.updateDisciplinaBD(Disciplina).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao atualizar a Disciplina"));
              }
          });
      }
  });
  return promise;
}


module.exports = {
    getDisciplina,
    getTodasDisciplinas,
    createDisciplina,
    deleteDisciplina,
    updateDisciplina
   
    
}
