const modelPeriodo = require('../models/periodo');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getPeriodo(id){
    
    const promise = new Promise( (resolve, reject) => { 
        
        if(id === null || !id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Nenhum periodo com este id encontrado"));
        } else {
            modelPeriodo.getPeriodoBD(id).then( periodo => {
                
                if (typeof periodo  !== 'undefined' && !isEmptyObject(periodo)) { 
                    resolve(periodo);
                } 
                else { 
                    reject(new Error("Nenhum periodo com este id encontrado"));
                } 
            
            });
        }
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
        if (!(dadosPeriodo !== null && 'ano' in dadosPeriodo && 'semestre' in dadosPeriodo)) {
            reject(new Error("Erro: informe todos os campos do objeto Periodo"));
        }
        else if (dadosPeriodo.ano === null || dadosPeriodo.semestre === null) {
            reject(new Error("Erro: informe todos os campos do objeto Periodo"));
        }
        else if (!dadosPeriodo.ano.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Erro: O ano deve conter exatamente 4 caracteres numéricos"));
        }
        else if (!dadosPeriodo.semestre.toString().match(/^[0-9]{1}$/)) {
            reject(new Error("Erro: O semestre deve conter exatamente 1 caractere numérico"));
        }
        else {
            modelPeriodo.createPeriodoBD(dadosPeriodo).then( resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{          
                    reject(new Error("Falha ao inserir periodo"));
                }
            });
        }
    });
    return promise;

}


function deletePeriodo(id){
    const promise = new Promise((resolve, reject) => { 
        if(id === null || !id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Falha ao remover periodo/periodo não encontrado"));
        } else {
            modelPeriodo.deletePeriodoBD(id).then(resultado => {
                if (resultado.affectedRows >= 1){
                    resolve(resultado);
                }else{
                    reject(new Error("Falha ao remover periodo/periodo não encontrado"));
                }
            });
        }
    });
    return promise;
}

function updatePeriodo(periodo){
    const promise = new Promise((resolve, reject) => { 
        if (!(periodo !== null && 'id' in periodo && 'ano' in periodo && 'semestre' in periodo)) {
            reject(new Error("Erro: informe todos os campos do objeto Periodo"));
        }
        else if (periodo.ano === null || periodo.semestre === null || periodo.id === null) {
            reject(new Error("Erro: informe todos os campos do objeto Periodo"));
        }
        else if (!periodo.ano.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Erro: O ano deve conter exatamente 4 caracteres numéricos"));
        }
        else if (!periodo.semestre.toString().match(/^[0-9]{1}$/)) {
            reject(new Error("Erro: O semestre deve conter exatamente 1 caractere numérico"));
        }
        else if (!periodo.id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Erro: O valor do ID deve ser numérico"));
        }
        else {
            modelPeriodo.updatePeriodoBD(periodo).then(resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao atualizar periodo/periodo não encontrado"));
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
