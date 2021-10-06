
const modelProfessor = require('../models/professorModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getProfessor(matricula){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelProfessor.getProfessorBD(matricula).then( professor => {
            
            if (typeof professor  !== 'undefined' && !isEmptyObject(professor)) { 
                console.log(professor);
                resolve(professor);
            } 
            else { 
                reject("Nenhum professor com esta matrícula encontrado");
            } 
         
        });
         
    });
    return promise;
}



function getTodosProfessores(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelProfessor.getTodosProfessoresBD().then( professores => {
            
           if (typeof professores  !== 'undefined' && professores) { 
                console.log(professores);
                resolve(professores);
            } 
            else { 
                reject(new Error("Nenhum professor encontrado"));
            } 
            
        });
    });
    return promise;
}

function createProfessor(dadosProfessor){
    const promise = new Promise((resolve, reject) => { 
        modelProfessor.createProfessorBD(dadosProfessor).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir professor"));
        }
        });
    });
    return promise;

}


function deleteProfessor(matricula){
    const promise = new Promise((resolve, reject) => { 
        modelProfessor.deleteProfessorBD(matricula).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover professor/professor não encontrado"));
        }
        });
    });
    return promise;
}

function updateProfessor(professor){
    const promise = new Promise((resolve, reject) => { 
        modelProfessor.updateProfessorBD(professor).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar professor/professor não encontrado"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo professor"+resultado));
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
