const disciplina = jest.createMockFromModule('../DisciplinaModel.js');


function getTodosPeriodos() {
    return new Promise(function(resolve, reject) {

        

        resolve([

    { id:1,     ano: 2020,     semestre: 1 },
    { id:2,     ano: 2020,     semestre: 2 },
    { id:3,     ano: 2021,     semestre: 1 },
    { id:4,     ano: 2021,     semestre: 2 },
    
            ]);

    });
}

function getPeriodo(codigo) {
    return new Promise(function(resolve, reject) {

        

        resolve({
        id:1,
        ano: 2020,
        semestre: 1 
        });

    });
}

function createPeriodo(periodo) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deletePeriodo(id) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updatePeriodo(periodo) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

module.exports = {
    getPeriodo,
    getTodosPeriodos,
    createPeriodo,
    deletePeriodo,
    updatePeriodo
}