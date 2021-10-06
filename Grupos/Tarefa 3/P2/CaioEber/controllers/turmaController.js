const modelTurma = require('../models/turma');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getTurma(codigo) {
    
    const promise = new Promise( (resolve, reject) => { 
        if(codigo === null || !codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Nenhuma turma com este código encontrada"));
        }
        else {
            modelTurma.getTurmaBD(codigo).then( turma => {
                
                if (typeof turma  !== 'undefined' && !isEmptyObject(turma)) { 
                    resolve(turma);
                } 
                else { 
                    reject(new Error("Nenhuma turma com este código encontrada"));
                } 
            
            });
        }
         
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
        if (!(dadosTurma !== null && 'codigo' in dadosTurma && 'id_periodo' in dadosTurma && 'id_professor' in dadosTurma && 'id_disciplina' in dadosTurma)) {
            reject(new Error("Erro: informe todos os campos do objeto Turma"));
        }
        else if(dadosTurma.codigo === null || dadosTurma.id_periodo === null || dadosTurma.id_professor === null || dadosTurma.id_disciplina === null) {
            reject(new Error("Erro: informe todos os campos do objeto Turma"));
        }
        else if (!dadosTurma.codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Erro: O código deve conter exatamente 4 caracteres numéricos"));
        }
        else if (!dadosTurma.id_periodo.toString().match(/^[0-9]{1,}$/) || !dadosTurma.id_professor.toString().match(/^[0-9]{1,}$/) || !dadosTurma.id_disciplina.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Erro: Os IDs devem conter somente números"));
        }
        else {
            modelTurma.createTurmaBD(dadosTurma).then( resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{          
                    reject(new Error("Falha ao inserir turma"));
                }
            });
        }
    });
    return promise;

}

function deleteTurma(codigo){
    const promise = new Promise((resolve, reject) => {
        if(codigo === null || !codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Falha ao remover turma/turma não encontrada"));
        }
        else { 
            modelTurma.deleteTurmaBD(codigo).then(resultado => {
                if (resultado.affectedRows >= 1){
                    resolve(resultado);        
                } else{
                    reject(new Error("Falha ao remover turma/turma não encontrada"));
                }
            });
        }
    });
    return promise;
}

function updateTurma(turma){
    const promise = new Promise((resolve, reject) => { 
        if (!(turma !== null && 'codigo' in turma && 'id_periodo' in turma && 'id_professor' in turma && 'id_disciplina' in turma)) {
            reject(new Error("Erro: informe todos os campos do objeto Turma"));
        }
        else if(turma.codigo === null || turma.id_periodo === null || turma.id_professor === null || turma.id_disciplina === null) {
            reject(new Error("Erro: informe todos os campos do objeto Turma"));
        }
        else if (!turma.codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Erro: O código deve conter exatamente 4 caracteres numéricos"));
        }
        else if (!turma.id_periodo.toString().match(/^[0-9]{1,}$/) || !turma.id_professor.toString().match(/^[0-9]{1,}$/) || !turma.id_disciplina.toString().match(/^[0-9]{1,}$/)) {
            reject(new Error("Erro: Os IDs devem conter somente números"));
        }
        else {
            modelTurma.updateTurmaBD(turma).then(resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao atualizar turma/turma não encontrada"));
                }
            });
        }
    });
    return promise;
}

function getMedia(codigo) {
    const promise = new Promise ( (resolve, reject) => {
        if(codigo === null || !codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("Nenhuma turma encontrada"));
        } else {
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
                    reject(new Error("Nenhuma turma encontrada"));
                } 
            });
        }
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
