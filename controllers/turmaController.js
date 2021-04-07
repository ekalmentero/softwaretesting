const modelTurma = require('../models/turmaModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getTurma(codigo){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelTurma.getTurmaBD(codigo).then( turma => {
            
            if (typeof turma  !== 'undefined' && !isEmptyObject(turma)) { 
                resolve(turma);
            } 
            else { 
                reject("Nenhuma turma com este código encontrada");
            } 
         
        });
         
    });
    return promise;
}

function getTodasTurmas(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelTurma.getTodasTurmasBD().then( turmas => {
            
           if (typeof turmas  !== 'undefined' && turmas) { 
                resolve(turmas);
            } 
            else { 
                reject(new Error("Nenhuma turma encontrada"));
            } 
            
        });
    });
    return promise;
}

function createTurma(dadosTurma){
    const promise = new Promise((resolve, reject) => { 
        modelTurma.createTurmaBD(dadosTurma).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir turma"));
        }
        });
    });
    return promise;

}


function deleteTurma(codigo){
    const promise = new Promise((resolve, reject) => { 
        modelTurma.deleteTurmaBD(codigo).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover turma/turma não encontrada"));
        }
        });
    });
    return promise;
}

function updateTurma(turma){
    const promise = new Promise((resolve, reject) => { 
        modelTurma.updateTurmaBD(turma).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar turma/turma não encontrada"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo turma"+resultado));
    });
    return promise;
}

function getMedia(codigo) {
    const promise = new Promise ( (resolve, reject) => {
        modelTurma.getMediaTurma(codigo).then( avaliacoes => {
            if (typeof avaliacoes  !== 'undefined' && avaliacoes) {
                let total = 0;
                let dividendo = 0;
                avaliacoes.forEach((avaliacao) => {
                    total += (avaliacao.nota*avaliacao.peso);
                    dividendo += avaliacao.peso;
                });
                let media = { media: total / dividendo };
                resolve(media);
            } 
            else { 
                reject(new Error("Nenhum aluno encontrado"));
            } 
        });
    });

    return promise;
}

module.exports = {
    getTurma,
    getTodasTurmas,
    createTurma,
    deleteTurma,
    updateTurma,
    getMedia
}
