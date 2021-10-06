
const periodo = jest.createMockFromModule('../periodo.js');

function getTodosPeriodosBD() {
    return new Promise((resolve, reject) => resolve([
        {id: 1, ano: 2020, semestre: 1},
        {id: 2, ano: 2020, semestre: 2},
        {id: 3, ano: 2021, semestre: 1},
    ]));
}

function getPeriodoBD(id) {
    return new Promise((resolve, reject) => resolve([{id: 3, ano: 2021, semestre: 1}]));
}

function createPeriodoBD(periodo) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function deletePeriodoBD(id) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function updatePeriodoBD(id) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

module.exports = {
    createPeriodoBD,
    deletePeriodoBD,
    updatePeriodoBD,
    getPeriodoBD,
    getTodosPeriodosBD
}