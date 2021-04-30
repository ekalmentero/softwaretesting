
const modelProfessor = require('../models/professor');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getProfessor(matricula){
    
    const promise = new Promise( (resolve, reject) => { 

        if(matricula === null || !matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Nenhum professor com esta matrícula encontrado"));
        } else {
            modelProfessor.getProfessorBD(matricula).then( professor => {
                
                if (typeof professor  !== 'undefined' && !isEmptyObject(professor)) { 
                    resolve(professor);
                } 
                else { 
                    reject(new Error("Nenhum professor com esta matrícula encontrado"));
                }
            });
        }
         
    });
    return promise;
}

function getTodosProfessores(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modelProfessor.getTodosProfessoresBD().then( professores => {
            
           if (typeof professores  !== 'undefined' && professores) { 
                resolve(professores);
            } 
            else { 
                reject(new Error("Nenhum professor encontrado"));
            } 
            
        });
    });
    return promise;
}

function createProfessor(dadosProfessor){
    const promise = new Promise((resolve, reject) => { 
        if (!(dadosProfessor !== null && 'matricula' in dadosProfessor && 'nome' in dadosProfessor)) {
            reject(new Error("Erro: informe todos os campos do objeto Professor"));
        }
        else if (dadosProfessor.matricula === null || dadosProfessor.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Professor"));
        }
        else if (!dadosProfessor.matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: A matrícula deve conter exatamente 6 caracteres numéricos"));
        }
        else if (dadosProfessor.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || dadosProfessor.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelProfessor.createProfessorBD(dadosProfessor).then( resultado => {
                
                if (resultado.affectedRows == 1){
                    resolve(resultado);        
                }else{          
                    reject(new Error("Falha ao inserir professor"));
                }
            });
        }
    });
    return promise;

}


function deleteProfessor(matricula){
    const promise = new Promise((resolve, reject) => { 
        if(matricula === null || !matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Falha ao remover professor/professor não encontrado"));
        } else {
            modelProfessor.deleteProfessorBD(matricula).then(resultado => {
                
                if (resultado.affectedRows >= 1){
                    resolve(resultado);        
                }else{
                    reject(new Error("Falha ao remover professor/professor não encontrado"));
                }
            });
        }
    });
    return promise;
}

function updateProfessor(professor){
    const promise = new Promise((resolve, reject) => { 
        if (!(professor !== null && 'matricula' in professor && 'nome' in professor)) {
            reject(new Error("Erro: informe todos os campos do objeto Professor"));
        }
        else if (professor.matricula === null || professor.nome === null) {
            reject(new Error("Erro: informe todos os campos do objeto Professor"));
        }
        else if (!professor.matricula.toString().match(/^[0-9]{6}$/)) {
            reject(new Error("Erro: A matrícula deve conter exatamente 6 caracteres numéricos"));
        }
        else if (professor.nome.toString().replace(/\s+/g, '').match(/^[0-9]{1,}$/) || professor.nome.toString().replace(/\s+/g, '') === '') {
            reject(new Error("Erro: Informe um nome válido"));
        }
        else {
            modelProfessor.updateProfessorBD(professor).then(resultado => {
                
                if (resultado.affectedRows == 1) {
                    resolve(resultado);        
                } else {
                    reject(new Error("Falha ao atualizar professor/professor não encontrado"));
                }
            });
        }
    });
    return promise;
}


module.exports = {
    getProfessor,
    getTodosProfessores,
    createProfessor,
    deleteProfessor,
    updateProfessor
}
