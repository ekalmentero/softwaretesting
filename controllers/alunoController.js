
const modelAluno = require('../models/aluno');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getAluno(matricula){
    
    const promise = new Promise( (resolve, reject) => { 
        if (matricula===null || !matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Nenhum aluno com esta matrícula encontrado"));
        }
        else {
            modelAluno.getAlunoBD(matricula).then( aluno => {
                
                if (typeof aluno  !== 'undefined' && !isEmptyObject(aluno)) { 
                    resolve(aluno);
                } 
                else { 
                    reject(new Error("Nenhum aluno com esta matrícula encontrado"));
                } 
            
            });
        }
         
    });
    return promise;
}

function getCR(matricula) {
    const promise = new Promise ( (resolve, reject) => {
        if(isNaN(matricula) || matricula === null) {
            reject(new Error("Informe uma matrícula de formato válido"));
        } else if (!matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("A matrícula precisa ser composta por exatamente 6 caracteres numéricos."));
        } else {
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
        }
    });

    return promise;
}

function getSituacao(matricula, codigo) {
    const promise = new Promise ( (resolve, reject) => {

        if(isNaN(matricula) || isNaN(codigo) || matricula === null || codigo === null) {
            reject(new Error("A matrícula e o código são campos numéricos obrigatórios."));
        } else if (!matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("A matrícula precisa ser composta por exatamente 6 caracteres numéricos."));
        } else if (!codigo.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("O código precisa ser composto por exatamente 4 caracteres numéricos."));
        } else {
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
        }
    });

    return promise;
}

function getCRPeriodo(matricula, ano, semestre) {
    const promise = new Promise ( (resolve, reject) => {
        if(isNaN(matricula) || isNaN(ano) || isNaN(semestre) || matricula === null || ano == null | semestre == null) {
            reject(new Error("A matrícula, o ano e o semestre são campos numéricos obrigatórios."));
        } else if (!matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("A matrícula precisa ser composta por exatamente 6 caracteres numéricos."));
        } else if (!ano.toString().match(/^[0-9]{4}$/)) {
            reject(new Error("O ano precisa ser composto por exatamento 4 caracteres numéricos."));
        } else if (!semestre.toString().match(/^[0-9]{1}$/)) {
            reject(new Error("O semestre precisa ser composto por exatamento 1 caractere numérico."));
        }
        else {
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
        }
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

        if (!(dadosAluno !== null && 'matricula' in dadosAluno && 'nome' in dadosAluno)) {
            reject(new Error("Erro: informe todos os campos do objeto Aluno"));
        }
        else if (dadosAluno.matricula === null || dadosAluno.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Aluno"));
        }
        else if (!dadosAluno.matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: A matrícula deve conter exatamente 6 caracteres numéricos"));
        }
        else if (dadosAluno.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || dadosAluno.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelAluno.createAlunoBD(dadosAluno).then( resultado => {
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                } else{          
                    reject(new Error("Falha ao inserir aluno"));
                }
            });
        }
    });
    return promise;

}

function deleteAluno(matricula){
    const promise = new Promise((resolve, reject) => { 
        if (matricula===null || !matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Falha ao remover aluno/aluno não encontrado"));
        }
        else {
            modelAluno.deleteAlunoBD(matricula).then(resultado => {
                if (resultado.affectedRows >= 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao remover aluno/aluno não encontrado"));
                }
            });
        }
    });
    return promise;
}

function updateAluno(aluno){
    const promise = new Promise((resolve, reject) => {

        if (!(aluno !== null && 'matricula' in aluno && 'nome' in aluno)) {
            reject(new Error("Erro: informe todos os campos do objeto Aluno"));
        }
        else if (aluno.matricula === null || aluno.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Aluno"));
        }
        else if (!aluno.matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: A matrícula deve conter exatamente 6 caracteres numéricos"));
        }
        else if (aluno.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || aluno.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelAluno.updateAlunoBD(aluno).then(resultado => {
                if (resultado.affectedRows == 1) {
                    resolve(resultado);        
                } else {
                    reject(new Error("Falha ao atualizar aluno/aluno não encontrado"));
                }
            });
        }
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
