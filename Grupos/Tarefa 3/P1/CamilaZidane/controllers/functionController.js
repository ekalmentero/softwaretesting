const functionBD = require('../models/functionModel');

function calcularCRTotal(alunoMatricula){
        
    const promise = new Promise((resolve, reject) => { 
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
            console.log('O seu CR total é igual a '+ CRTotal.toFixed(2));
            resolve(resultado);
            
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
        }
        });
    });
    return promise;
}


function calcularCRPeriodo(alunoMatricula, ano, semestre){

    const promise = new Promise((resolve, reject) => { 
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
            console.log('O seu CR total é igual a '+ CRTotal.toFixed(2));
            resolve(resultado);
            
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
        }
        });
    });
    return promise;
   
        
}


function calcularMediaDisciplina(alunoMatricula, turma){
    const promise = new Promise((resolve, reject) => { 
        functionBD.calcularMediaDisciplinaBD(alunoMatricula,turma).then(resultado => {    

        if (typeof resultado  !== 'undefined' && resultado) { 
            
            var soma=0;
            var somaPeso=0;
            var media;
    
            resultado.forEach(resultado => { // usar o foreach
                soma = (parseFloat(`${resultado.nota}`) * parseFloat(`${resultado.peso}`)) + (parseFloat(`${resultado.nota2}`) * parseFloat(`${resultado.peso2}`));
                somaPeso = (parseFloat(`${resultado.peso}`) + parseFloat(`${resultado.peso2}`));
    
                media = (soma/somaPeso);
                console.log('Sua media nessa turma é igual a '+ media.toFixed(2));
            });

            resolve(media);
            
        }                  
        else{
            reject(new Error("Aluno não encontrado"));
        }
        });
    });
    return promise;

}


function resultadoFinal(alunoMatricula, turma){
    calcularMediaDisciplina(alunoMatricula, turma).then(media => { 
    if (media >= 5){
        console.log('Você está aprovado');
    }
    else{
        console.log('Você está reprovado');
    }
    })
}

