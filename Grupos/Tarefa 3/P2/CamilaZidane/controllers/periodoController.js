
const modelPeriodo = require('../models/periodoModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getPeriodo(id){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelPeriodo.getPeriodoBD(id).then( periodo => {
            
            if (typeof periodo  !== 'undefined' && !isEmptyObject(periodo)) { 
                resolve(periodo);
                return periodo
            } 
            else { 
                reject(new Error("Nenhum periodo com este id encontrado"));
                return 'Periodo não encontrada'
            } 
         
        });
         
    });
    return promise;
}


function getTodosPeriodos(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelPeriodo.getTodosPeriodosBD().then( periodos => {
            
           if (typeof periodos  !== 'undefined' && periodos) { 
                resolve(periodos);
                return periodos
            } 
            else { 
                reject(new Error("Nenhum periodo encontrado"));
                return 'Não foi possível retornar todos os periodos'
            } 
            
        });
    });
    return promise;
}

function createPeriodo(dadosPeriodo){
const promise = new Promise((resolve, reject) => { 

      if (!(dadosPeriodo !== null && 'ano' in dadosPeriodo && 'semestre' in dadosPeriodo)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelPeriodo.createPeriodoBD(dadosPeriodo).then( resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao inserir periodo"));
              }
          });
      }
  });
  return promise;
}


function deletePeriodo(id){
const promise = new Promise((resolve, reject) => {
    if (!(id !== null)) {
        reject(new Error ("Dados inválidos"));
     }else if (id.toString().length !== 1 && id.toString().length !== 2){
        reject(new Error ("O id deve ter 1 ou 2 dígitos"));
     }else if (id === 0){
        reject(new Error ("O id não pode ser igual a 0"));
     }
   else{
    modelPeriodo.deletePeriodoBD(id).then(resultado => {
        if (resultado.affectedRows >= 1) {
          resolve(1)
          return 1
        }else{          
            reject(new Error("Falha ao atualizar periodo"));
        }
      })
   }
  })
  return promise
}

function updatePeriodo(periodo){
const promise = new Promise((resolve, reject) => { 

      if (!(periodo !== null && 'id' in periodo && 'ano' in periodo && 'semestre' in periodo)) {
          reject(new Error ("Dados incompletos"));
      }
      else {
        modelPeriodo.updatePeriodoBD(periodo).then(resultado => {
              if (resultado.affectedRows == 1){
                  resolve(1);        
              } else{          
                  reject(new Error("Falha ao atualizar periodo"));
              }
          });
      }
  });
  return promise;
}


module.exports = {
    getPeriodo,
    getTodosPeriodos,
    createPeriodo,
    deletePeriodo,
    updatePeriodo
    
}
