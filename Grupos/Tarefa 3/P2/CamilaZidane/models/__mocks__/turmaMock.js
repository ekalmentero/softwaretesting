const turma = jest.createMockFromModule('../TurmaModel.js');


function getTodasTurmas() {
    return new Promise(function(resolve, reject) {

        

        resolve([

    { codigo: '04',      professor: 2017290789, disciplina: '004',     periodo: 4 },
    { codigo: '05',      professor: 2017290051, disciplina: '002',     periodo: 1 },
    { codigo: '07',      professor: 2017290456, disciplina: '001',     periodo: 3 },
    { codigo: '09',      professor: 2017290078, disciplina: '003',     periodo: 2 },
    { codigo: 'benzema', professor: '00001',      disciplina: 'benzema', periodo: 1 },
    

            ]);

    });
}

function getTurma(codigo) {
    return new Promise(function(resolve, reject) {

        

        resolve({
    codigo: '04',      
    professor: 2017290789, 
    disciplina: '004',     
    periodo: 4 
    });

    });
}

function createTurma(diciplina) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deleteTurma(codigos) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updateTurma(diciplina) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

module.exports = {
    getTurma,
    getTodasTurmas,
    createTurma,
    deleteTurma,
    updateTurma
}