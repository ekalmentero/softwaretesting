
const Aluno = require('../models/aluno');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function getAluno(matricula){
    
    const promise = new Promise( (resolve, reject) => { 
        
       Aluno.getAlunoBD(matricula).then( aluno => {
            
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

function getCR (matricula){
    // todo

    //recuperar notas do aluno

    //lógica de cálculo do CR
}

function getTodosAlunos(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        Aluno.getTodosAlunosBD().then( alunos => {
            
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



module.exports = {
    getAluno,
    getTodosAlunos,
   
    
}
