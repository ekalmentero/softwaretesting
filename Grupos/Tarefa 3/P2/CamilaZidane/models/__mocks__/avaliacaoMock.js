const avaliacao = jest.createMockFromModule('../AvaliacaoModel.js');


function getTodasAvaliacoes() {
    
    return new Promise(function(resolve, reject) {

        

        resolve([

        {id: 1 , turma: '04', aluno: '2017390895', peso: 1, peso2: 2, nota: 6, nota2: 5},
        {id: 2 , turma: '05', aluno: '2017390078', peso: 1, peso2: 2, nota: 7, nota2: 6},
        {id: 3,  turma: '07', aluno: '2017390077', peso: 1, peso2: 2, nota: 6, nota2: 8},
        {id: 4,  turma: '09', aluno: '2017390214', peso: 1, peso2: 2, nota: 8, nota2: 9},
        {id: 9,  turma: '05', aluno: '2017390895', peso: 2, peso2: 2, nota: 6, nota2: 8},
        {id: 10, turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10},  
        
            ]);

    });
}

function getAvaliacao(matricula) {

    return new Promise(function(resolve, reject) {

        

        resolve({

        id: 1 ,
        turma: '04',
        aluno: '2017390895',
        peso: 1,
        peso2: 2,
        nota: 6,
        nota2: 5

        });

    });
    
        
        
}

function createAvaliacao(avaliacao) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deleteAvaliacao(id) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updateAvaliacao(id) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

module.exports = {
    getAvaliacao,
    getTodasAvaliacoes,
    createAvaliacao,
    deleteAvaliacao,
    updateAvaliacao
}