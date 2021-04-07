const modelDisciplina = require('../models/disciplinaModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getDisciplina(codigo){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getDisciplinaBD(codigo).then( disciplina => {
            
            if (typeof disciplina  !== 'undefined' && !isEmptyObject(disciplina)) { 
                resolve(disciplina);
            } 
            else { 
                reject("Nenhuma disciplina com este código encontrada");
            } 
         
        });
         
    });
    return promise;
}

function getTodasDisciplinas(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getTodasDisciplinasBD().then( disciplinas => {
            
           if (typeof disciplinas  !== 'undefined' && disciplinas) { 
                resolve(disciplinas);
            } 
            else { 
                reject(new Error("Nenhuma disciplina encontrada"));
            } 
            
        });
    });
    return promise;
}

function createDisciplina(dadosDisciplina){
    const promise = new Promise((resolve, reject) => { 
        modelDisciplina.createDisciplinaBD(dadosDisciplina).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir disciplina"));
        }
        });
    });
    return promise;

}


function deleteDisciplina(codigo){
    const promise = new Promise((resolve, reject) => { 
        modelDisciplina.deleteDisciplinaBD(codigo).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover disciplina/disciplina não encontrada"));
        }
        });
    });
    return promise;
}

function updateDisciplina(disciplina){
    const promise = new Promise((resolve, reject) => { 
        modelDisciplina.updateDisciplinaBD(disciplina).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar disciplina/disciplina não encontrada"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo disciplina"+resultado));
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
