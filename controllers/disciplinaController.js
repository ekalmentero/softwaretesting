const modelDisciplina = require('../models/disciplina');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getDisciplina(codigo){
    
    const promise = new Promise( (resolve, reject) => { 
        if (codigo === null || !codigo.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Nenhuma disciplina com este código encontrada"));
        }
        else {
            modelDisciplina.getDisciplinaBD(codigo).then( disciplina => {
                
                if (typeof disciplina  !== 'undefined' && !isEmptyObject(disciplina)) { 
                    resolve(disciplina);
                } 
                else { 
                    reject(new Error("Nenhuma disciplina com este código encontrada"));
                } 
            
            });
        }
         
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
        if (!(dadosDisciplina !== null && 'codigo' in dadosDisciplina && 'nome' in dadosDisciplina)) {
            reject(new Error("Erro: informe todos os campos do objeto Disciplina"));
        }
        else if (dadosDisciplina.codigo === null || dadosDisciplina.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Disciplina"));
        }
        else if (!dadosDisciplina.codigo.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: O código deve conter exatamente 6 caracteres numéricos"));
        }
        else if (dadosDisciplina.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || dadosDisciplina.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelDisciplina.createDisciplinaBD(dadosDisciplina).then( resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{          
                    reject(new Error("Falha ao inserir disciplina"));
                }
            });
        }
    });
    return promise;
}


function deleteDisciplina(codigo){
    const promise = new Promise((resolve, reject) => { 
        if (codigo === null || !codigo.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Falha ao remover disciplina/disciplina não encontrada"));
        }
        else {
            modelDisciplina.deleteDisciplinaBD(codigo).then(resultado => {
                if (resultado.affectedRows >= 1) {
                    resolve(resultado);        
                } else{
                    reject(new Error("Falha ao remover disciplina/disciplina não encontrada"));
                }
            });
        }
    });
    return promise;
}

function updateDisciplina(disciplina){
    const promise = new Promise((resolve, reject) => { 
        if (!(disciplina !== null && 'codigo' in disciplina && 'nome' in disciplina)) {
            reject(new Error("Erro: informe todos os campos do objeto Disciplina"));
        }
        else if (disciplina.codigo === null || disciplina.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Disciplina"));
        }
        else if (!disciplina.codigo.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: O código deve conter exatamente 6 caracteres numéricos"));
        }
        else if (disciplina.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || disciplina.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelDisciplina.updateDisciplinaBD(disciplina).then(resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao atualizar disciplina/disciplina não encontrada"));
                }
            });
        }
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
