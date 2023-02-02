const modeloAluno = require('../modelos/aluno_modelo');


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

function lerAluno(matricula){
    return "bateu controle";

    let mensagem = modeloAluno.
    /*
    const promise = new Promise( (resolve, reject) => { 
        
        modeloAluno.lerAlunoBD(matricula).then( aluno => {
            
            if (typeof aluno  !== 'undefined' && !isEmptyObject(aluno)) { 
                resolve(aluno);
            } 
            else { 
                reject("Nenhum aluno com esta matrícula encontrado");
            } 
         
        });
        
         
    });
    
    return promise;
    */
}

function lerCR (matricula){
    // todo

    //recuperar notas do aluno

    //lógica de cálculo do CR
}

function lerTodosAlunos(){
    
    const promise = new Promise( (resolve, reject) => { 
        
        modeloAluno.lerTodosAlunosBD().then( alunos => {
            
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

function criarAluno(dadosAluno){
    const promise = new Promise((resolve, reject) => { 
        modeloAluno.criarAlunoBd(dadosAluno).then( resultado => {
        if (resultado.affectedRows == 1){
            resolve(resultado);        
        }else{          
            reject(new Error("Falha ao inserir aluno"));
        }
        });
    });
    return promise;

}


function deletarAluno(matricula){
    const promise = new Promise((resolve, reject) => { 
        modeloAluno.deletarAlunoBD(matricula).then(resultado => {
        if (resultado.affectedRows >= 1){
            resolve(resultado);        
        }else{
            reject(new Error("Falha ao remover aluno/aluno não encontrado"));
        }
        });
    });
    return promise;
}

function atualizarAluno(aluno){
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
    lerAluno,
    lerTodosAlunos,
    criarAluno,
    deletarAluno,
    atualizarAluno
   
    
}
