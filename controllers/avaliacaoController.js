const modelAvaliacao = require('../models/avaliacaoModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getAvaliacao(id){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelAvaliacao.getAvaliacaoBD(id).then( avaliacao => {
            
            if (typeof avaliacao  !== 'undefined' && !isEmptyObject(avaliacao)) { 
                resolve(avaliacao);
            } 
            else { 
                reject("Nenhuma avaliacao com este id encontrada");
            } 
         
        });
         
    });
    return promise;
}

function getTodasAvaliacaos(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelAvaliacao.getTodasAvaliacaosBD().then( avaliacaos => {
            
           if (typeof avaliacaos  !== 'undefined' && avaliacaos) { 
                resolve(avaliacaos);
            } 
            else { 
                reject(new Error("Nenhuma avaliacao encontrada"));
            } 
            
        });
    });
    return promise;
}

function createAvaliacao(dadosAvaliacao){
    const promise = new Promise((resolve, reject) => { 
        modelAvaliacao.createAvaliacaoBD(dadosAvaliacao).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir avaliacao"));
        }
        });
    });
    return promise;

}


function deleteAvaliacao(id){
    const promise = new Promise((resolve, reject) => { 
        modelAvaliacao.deleteAvaliacaoBD(id).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover avaliacao/avaliacao não encontrada"));
        }
        });
    });
    return promise;
}

function updateAvaliacao(avaliacao){
    const promise = new Promise((resolve, reject) => { 
        modelAvaliacao.updateAvaliacaoBD(avaliacao).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar avaliacao/avaliacao não encontrada"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo avaliacao"+resultado));
    });
    return promise;
}


module.exports = {
    getAvaliacao,
    getTodasAvaliacaos,
    createAvaliacao,
    deleteAvaliacao,
    updateAvaliacao
}
