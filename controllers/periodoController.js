const modelPeriodo = require('../models/periodoModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getPeriodo(id){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelPeriodo.getPeriodoBD(id).then( periodo => {
            
            if (typeof periodo  !== 'undefined' && !isEmptyObject(periodo)) { 
                resolve(periodo);
            } 
            else { 
                reject("Nenhum periodo encontrado para este ano e semestre");
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
            } 
            else { 
                reject(new Error("Nenhum periodo encontrado"));
            } 
            
        });
    });
    return promise;
}

function createPeriodo(dadosPeriodo){
    const promise = new Promise((resolve, reject) => { 
        modelPeriodo.createPeriodoBD(dadosPeriodo).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir periodo"));
        }
        });
    });
    return promise;

}


function deletePeriodo(id){
    const promise = new Promise((resolve, reject) => { 
        modelPeriodo.deletePeriodoBD(id).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);
        }else{
            reject(new Error("Falha ao remover periodo/periodo não encontrado"));
        }
        });
    });
    return promise;
}

function updatePeriodo(id){
    const promise = new Promise((resolve, reject) => { 
        modelPeriodo.updatePeriodoBD(id).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar periodo/periodo não encontrado"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo periodo"+resultado));
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
