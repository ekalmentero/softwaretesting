
const modelAluno = require('../models/alunoModel');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getAluno(matricula){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelAluno.getAlunoBD(matricula).then( aluno => {
            
            if (typeof aluno  !== 'undefined' && !isEmptyObject(aluno)) { 
                resolve(aluno);
            } 
            else { 
                reject("Nenhum aluno com esta matrícula encontrado");
            } 
         
        });
         
    });
    return promise;
}

function getCR(matricula) {
    const promise = new Promise ( (resolve, reject) => {
        modelAluno.getAvaliacoesByAluno(matricula).then( avaliacoes => {
            if (typeof avaliacoes  !== 'undefined' && avaliacoes) {
                let total = 0;
                let dividendo = 0;
                avaliacoes.forEach((avaliacao) => {
                    total += (avaliacao.nota*avaliacao.peso);
                    dividendo += avaliacao.peso;
                });
                let cr = { cr: total / dividendo };
                resolve(cr);
            } 
            else { 
                reject(new Error("Nenhum aluno encontrado"));
            } 
        });
    });

    return promise;
}

function getSituacao(matricula, codigo) {
    const promise = new Promise ( (resolve, reject) => {
        modelAluno.getSituacao(matricula, codigo).then( avaliacoes => {
            if (typeof avaliacoes  !== 'undefined' && avaliacoes) {
                let total = 0;
                let dividendo = 0;
                avaliacoes.forEach((avaliacao) => {
                    total += (avaliacao.nota*avaliacao.peso);
                    dividendo += avaliacao.peso;
                });
                let media = total / dividendo;
                let situacao = { situacao: (media >= 5) ? ('Aprovado') : ('Reprovado'), media: media };
                resolve(situacao);
            } 
            else { 
                reject(new Error("Nenhum aluno encontrado"));
            } 
        });
    });

    return promise;
}

function getCRPeriodo(matricula, ano, semestre) {
    const promise = new Promise ( (resolve, reject) => {
        modelAluno.getAvaliacoesByAlunoByPeriodo(matricula, ano, semestre).then( avaliacoes => {
            if (typeof avaliacoes  !== 'undefined' && avaliacoes) {
                let total = 0;
                let dividendo = 0;
                avaliacoes.forEach((avaliacao) => {
                    total += (avaliacao.nota*avaliacao.peso);
                    dividendo += avaliacao.peso;
                });
                let cr = { cr: total / dividendo };
                resolve(cr);
            } 
            else { 
                reject(new Error("Aluno ou período não encontrado"));
            } 
        });
    });

    return promise;
}



function getTodosAlunos(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelAluno.getTodosAlunosBD().then( alunos => {
            
           if (typeof alunos  !== 'undefined' && alunos) { 
                resolve(alunos);
            } 
            else { 
                reject(new Error("Nenhum aluno encontrado"));
            } 
            
        });
    });
    return promise;
}

function createAluno(dadosAluno){
    const promise = new Promise((resolve, reject) => { 
        modelAluno.createAlunoBD(dadosAluno).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir aluno"));
        }
        });
    });
    return promise;

}


function deleteAluno(matricula){
    const promise = new Promise((resolve, reject) => { 
        modelAluno.deleteAlunoBD(matricula).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover aluno/aluno não encontrado"));
        }
        });
    });
    return promise;
}

function updateAluno(aluno){
    const promise = new Promise((resolve, reject) => { 
        modelAluno.updateAlunoBD(aluno).then(resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao atualizar aluno/aluno não encontrado"));
        }
        })
        .catch(resultado => console.log("Erro atualizar modelo aluno"+resultado));
    });
    return promise;
}


module.exports = {
    getAluno,
    getTodosAlunos,
    createAluno,
    deleteAluno,
    updateAluno,
    getCR,
    getCRPeriodo,
    getSituacao
}
