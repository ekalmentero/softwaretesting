const functionBD = require('../models/functionModel');

function calcularCRTotal(alunoMatricula){
        
    const promise = new Promise((resolve, reject) => { 

        if (alunoMatricula == null) {
            reject(new Error ("Dados inválidos"));}
            else if (alunoMatricula.toString().length !== 10){
                reject(new Error ("A matricula deve conter 10 dígitos"));
                 
               } 
        else{
        functionBD.calcularCRTotalBD(alunoMatricula).then(resultado => {    

        if (typeof resultado  !== 'undefined' && resultado) { 
            
            var somaTotal=0;
            var somaPeso=0;
            var CRTotal;
            
            for (let index = 0; index < resultado.length; index++) {
                somaTotal += (parseFloat(`${resultado[index].nota}`) * parseFloat(`${resultado[index].peso}`)) + (parseFloat(`${resultado[index].nota2}`) * parseFloat(`${resultado[index].peso2}`));
                somaPeso += (parseFloat(`${resultado[index].peso}`) + parseFloat(`${resultado[index].peso2}`));
  
                
            }
            CRTotal = (somaTotal/somaPeso);
            resolve('O seu CR total é igual a '+ CRTotal.toFixed(2));
            return('O seu CR total é igual a '+ CRTotal.toFixed(2));
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
            return 'Aluno não encontrado';
        }
        });
    }});
    return promise;
}


function calcularCRPeriodo(alunoMatricula, ano, semestre){

    const promise = new Promise((resolve, reject) => { 

        if (alunoMatricula == null || ano == null ||semestre == null) {
            reject(new Error ("Dados inválidos"));}
            else if (alunoMatricula.toString().length !== 10){
                reject(new Error ("A matricula deve conter 10 dígitos"));
                 
               } 
        else{
        functionBD.calcularCRPeriodoBD(alunoMatricula, ano, semestre).then(resultado =>{    

        if (typeof resultado  !== 'undefined' && resultado) { 
            
            var somaTotal=0;
            var somaPeso=0;
            var CRTotal;
            
            for (let index = 0; index < resultado.length; index++) {
                somaTotal += (parseFloat(`${resultado[index].nota}`) * parseFloat(`${resultado[index].peso}`)) + (parseFloat(`${resultado[index].nota2}`) * parseFloat(`${resultado[index].peso2}`));
                somaPeso += (parseFloat(`${resultado[index].peso}`) + parseFloat(`${resultado[index].peso2}`));
                
            }
            CRTotal = (somaTotal/somaPeso);
            resolve('O seu CR do periodo '+ ano +'.'+ semestre+' é igual a '+ CRTotal.toFixed(2));
            return('O seu CR do periodo '+ ano +'.'+ semestre+' é igual a '+ CRTotal.toFixed(2));
            
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
            return 'Aluno não encontrado';
        }
        });
    }});
    return promise;
   
        
}


function calcularMediaDisciplina(alunoMatricula, turma){
    const promise = new Promise((resolve, reject) => { 
        
        
        if (alunoMatricula == null || turma == null) {
            reject(new Error ("Dados inválidos"));
        }
        else if (alunoMatricula.toString().length !== 10){
            reject(new Error ("A matricula deve conter 10 dígitos"));
             
           }        
            else{
        
        functionBD.calcularMediaDisciplinaBD(alunoMatricula,turma).then(resultado => {    

        if (typeof resultado  !== 'undefined' && resultado) { 
            
            var soma=0;
            var somaPeso=0;
            var media;
    
            resultado.forEach(resultado => { // usar o foreach
                soma = (parseFloat(`${resultado.nota}`) * parseFloat(`${resultado.peso}`)) + (parseFloat(`${resultado.nota2}`) * parseFloat(`${resultado.peso2}`));
                somaPeso = (parseFloat(`${resultado.peso}`) + parseFloat(`${resultado.peso2}`));
    
                media = (soma/somaPeso);
            });
            
            resolve(media.toFixed(2));
            
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
            return 'Aluno não encontrado';
        }
        });
    }});
    return promise;

}

// concerta essa função, colocar promisse e colocar mensagem pra erro
function resultadoFinal(alunoMatricula, turma){
    const promise = new Promise((resolve, reject) => {
    
    if (alunoMatricula == null || turma == null) {
        reject(new Error ("Dados inválidos"));
    }
    else if (alunoMatricula.toString().length !== 10){
        reject(new Error ("A matricula deve conter 10 dígitos"));
             
    }
    else{
    calcularMediaDisciplina(alunoMatricula, turma).then(media => { 
    if (media >= 5){
        resolve('Você está aprovado');
    }
    else{
        resolve('Você está reprovado');
    }
    })}
})
return promise;
}

module.exports = {
    calcularCRTotal,
    calcularCRPeriodo,
    calcularMediaDisciplina,
    resultadoFinal
   
    
}