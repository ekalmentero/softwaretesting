const professor = jest.createMockFromModule('../professorModel.js');


function getTodosProfessores() {
    return new Promise(function(resolve, reject) {

        

        resolve([

    { nome:'Rizzo',    matricula: '2017290078'},
    { nome:'Kinder', matricula: '2017290051'},
    { nome:'Juliana',    matricula: '2017290456'},
    { nome:'Serra',    matricula: '2017290789'},
    { nome:'benzema',    matricula: '00001'},

            ]);

    });
}

function getProfessor(matricula) {
    return new Promise(function(resolve, reject) {

        

        resolve({
        nome:'Rizzo', 
        matricula: 2017290078
        });

    });
}

function createProfessor(professor) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deleteProfessor(matricula) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updateProfessor(professor) {
    return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

module.exports = {
    getProfessor,
    getTodosProfessores,
    createProfessor,
    deleteProfessor,
    updateProfessor
}