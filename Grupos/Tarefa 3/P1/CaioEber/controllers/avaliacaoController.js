const modelAvaliacao = require('../models/avaliacao');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getAvaliacao(id) {
    
    const promise = new Promise( (resolve, reject) => { 
        
        if(id === null || !id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Nenhuma avaliacao com este id encontrada"));
        } else {
            modelAvaliacao.getAvaliacaoBD(id).then( avaliacao => {
                
                if (typeof avaliacao  !== 'undefined' && !isEmptyObject(avaliacao)) { 
                    resolve(avaliacao);
                } 
                else { 
                    reject(new Error("Nenhuma avaliacao com este id encontrada"));
                } 
            
            });
        }
         
    });
    return promise;
}

function getTodasAvaliacoes(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelAvaliacao.getTodasAvaliacoesBD().then( avaliacaos => {
            
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
        if (!(dadosAvaliacao !== null && 'nota' in dadosAvaliacao && 'peso' in dadosAvaliacao && 'id_turma' in dadosAvaliacao && 'id_aluno' in dadosAvaliacao)) {
            reject(new Error("Erro: informe todos os campos do objeto Avaliacao"));
        }
        else if (dadosAvaliacao.nota === null || dadosAvaliacao.peso === null || dadosAvaliacao.id_turma === null || dadosAvaliacao.id_aluno === null) {
            reject(new Error("Erro: informe todos os campos do objeto Avaliacao"));
        }
        else if (isNaN(dadosAvaliacao.nota) || isNaN(dadosAvaliacao.peso) || isNaN(dadosAvaliacao.id_turma) || isNaN(dadosAvaliacao.id_aluno)) {
            reject(new Error("Erro: todos os campos precisam ser numéricos positivos"));
        }
        else if (dadosAvaliacao.peso < 0 || dadosAvaliacao.id_aluno <= 0 || dadosAvaliacao.id_turma <= 0) {
            reject(new Error("Erro: todos os campos precisam ser numéricos positivos"));
        }
        else if (dadosAvaliacao.nota < 0 || dadosAvaliacao.nota > 10) {
            reject(new Error("Erro: informe um valor numérico entre 0 e 10 para a nota"));
        }
        else {
            modelAvaliacao.createAvaliacaoBD(dadosAvaliacao).then( resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{          
                    reject(new Error("Falha ao inserir avaliacao"));
                }
            });
        }
    });
    return promise;
}


function deleteAvaliacao(id){
    const promise = new Promise((resolve, reject) => {
        if(id === null || !id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Falha ao remover avaliacao/avaliacao não encontrada"));
        } else { 
            modelAvaliacao.deleteAvaliacaoBD(id).then(resultado => {
                if (resultado.affectedRows >= 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao remover avaliacao/avaliacao não encontrada"));
                }
            });
        }
    });
    return promise;
}

function updateAvaliacao(avaliacao){
    const promise = new Promise((resolve, reject) => { 
        if (!(avaliacao !== null && 'id' in avaliacao && 'nota' in avaliacao && 'peso' in avaliacao && 'id_turma' in avaliacao && 'id_aluno' in avaliacao)) {
            reject(new Error("Erro: informe todos os campos do objeto Avaliacao"));
        }
        else if(avaliacao.id === null || !avaliacao.id.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Falha ao atualizar avaliacao/avaliacao não encontrada"));
        }
        else if (avaliacao.nota === null || avaliacao.peso === null || avaliacao.id_turma === null || avaliacao.id_aluno === null) {
            reject(new Error("Erro: informe todos os campos do objeto Avaliacao"));
        }
        else if (isNaN(avaliacao.nota) || isNaN(avaliacao.peso) || isNaN(avaliacao.id_turma) || isNaN(avaliacao.id_aluno)) {
            reject(new Error("Erro: todos os campos precisam ser numéricos positivos"));
        }
        else if (avaliacao.peso < 0 || avaliacao.id_aluno <= 0 || avaliacao.id_turma <= 0) {
            reject(new Error("Erro: todos os campos precisam ser numéricos positivos"));
        }
        else if (avaliacao.nota < 0 || avaliacao.nota > 10.0) {
            reject(new Error("Erro: informe um valor numérico entre 0 e 10 para a nota"));
        }
        else {
            modelAvaliacao.updateAvaliacaoBD(avaliacao).then(resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao atualizar avaliacao/avaliacao não encontrada"));
                }
            });
        }
    });
    return promise;
}


module.exports = {
    getAvaliacao,
    getTodasAvaliacoes,
    createAvaliacao,
    deleteAvaliacao,
    updateAvaliacao
}
