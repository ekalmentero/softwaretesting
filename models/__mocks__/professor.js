
const professor = jest.createMockFromModule('../professor.js');

function getTodosProfessoresBD() {
    return new Promise((resolve, reject) => resolve([
                {matricula: '177631', nome: 'Alphonsu Landeg'},
                {matricula: '377427', nome: 'Cordelie Mateiko'}
            ]));
}

function getProfessorBD(matricula) {
    return new Promise((resolve, reject) => resolve([{matricula: '177631', nome: 'Alphonso Landeg'}]));
}

function createProfessorBD(professor) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function deleteProfessorBD(matricula) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function updateProfessorBD(professor) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

module.exports = {
    createProfessorBD,
    deleteProfessorBD,
    updateProfessorBD,
    getProfessorBD,
    getTodosProfessoresBD
}