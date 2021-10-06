const fuction = jest.createMockFromModule('../functionModel.js');

function calcularCRTotal(alunoMatricula) {
        return new Promise(function(resolve, reject) {

        

        resolve([

    {peso: 1 , peso2: 2, nota: 6,  nota2: 5},
    {peso: 2 , peso2: 2, nota: 6,  nota2: 8},
    {peso: 1,  peso2: 1, nota: 10, nota2: 10},

                ]);

    });
}

function calcularCRPeriodo(alunoMatricula, ano, semestre) {
        return new Promise(function(resolve, reject) {

        

        resolve([

        {id: 1, nota: 6 ,  nota2: 8,  peso: 2,  peso2: 2},
        {id: 1, nota: 10 , nota2: 10, peso: 1,  peso2: 1},
       
        ]);

    });

}

function calcularMediaDisciplina(alunoMatricula, turma) {
        return new Promise(function(resolve, reject) {

        

        resolve([

        {peso: 1 , peso2: 2, nota: 6,  nota2: 5},
       
                ]);

    });
}

module.exports = {
    calcularCRTotal,
    calcularCRPeriodo,
    calcularMediaDisciplina
}