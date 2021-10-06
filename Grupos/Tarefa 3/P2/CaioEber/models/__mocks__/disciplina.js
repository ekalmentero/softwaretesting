
const disciplina = jest.createMockFromModule('../disciplina.js');

function getTodasDisciplinasBD() {
    return new Promise((resolve, reject) => resolve([
                {nome: 'Analog Circuit Design', codigo: '744240'},
                {nome: 'Analyst Programming', codigo: '341681'},
                {nome: 'Quality Control', codigo: '487990'},
                {nome: 'Web Designing I', codigo: '260076'},
                {nome: 'Software Testing', codigo: '818982'}
            ]));
}

function getDisciplinaBD(codigo) {
    return new Promise((resolve, reject) => resolve([{nome: 'Quality Control', codigo: '487990'}]));
}

function createDisciplinaBD(disciplina) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function deleteDisciplinaBD(codigo) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function updateDisciplinaBD(disciplina) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

module.exports = {
    createDisciplinaBD,
    deleteDisciplinaBD,
    updateDisciplinaBD,
    getDisciplinaBD,
    getTodasDisciplinasBD
}