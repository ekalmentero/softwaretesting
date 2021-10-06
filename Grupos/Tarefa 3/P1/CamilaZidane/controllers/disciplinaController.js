
const modelDisciplina = require('../models/DisciplinaModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getDisciplina(codigo){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getDisciplinaBD(codigo).then( Disciplina => {
            
            if (typeof Disciplina  !== 'undefined' && !isEmptyObject(Disciplina)) { 
                console.log(Disciplina);
                resolve(Disciplina);
            } 
            else { 
                reject("Nenhum Disciplina com esta código encontrado");
            } 
         
        });
         
    });
    return promise;
}


function getTodosDisciplinas(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelDisciplina.getTodosDisciplinasBD().then( disciplinas => {
            
           if (typeof disciplinas  !== 'undefined' && disciplinas) { 
                console.log(disciplinas);
                resolve(disciplinas);
            } 
            else { 
                reject(new Error("Nenhum Disciplina encontrado"));
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
            reject(new Error("Falha ao inserir Disciplina"));
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
            reject(new Error("Falha ao remover Disciplina/Disciplina não encontrado"));
        }
        });
    });
    return promise;
}

function updateDisciplina(Disciplina){
    const promise = new Promise((resolve, reject) => { 
        modelDisciplina.updateDisciplinaBD(Disciplina).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar Disciplina/Disciplina não encontrado"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo Disciplina"+resultado));
    });
    return promise;
}


module.exports = {
    getDisciplina,
    getTodosDisciplinas,
    createDisciplina,
    deleteDisciplina,
    updateDisciplina
   
    
}
