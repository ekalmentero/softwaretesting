const periodo = require('../models/periodo.js');

jest.mock('../models/periodo.js');

test('Mock do modelo periodo', () => {
    return expect(periodo.getPeriodoBD(3)).resolves.toEqual([{id: 3, ano: 2021, semestre: 1}]);
});

test('CreatePeriodo()', () => {
    return expect(periodo.createPeriodoBD({id: 4, ano: 2022, semestre: 1})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeletePeriodo()', () => {
    return expect(periodo.deletePeriodoBD(4)).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdatePeriodo()', () => {
    return expect(periodo.updatePeriodoBD({id: 3, ano: 2021, semestre: 2})).resolves.toHaveProperty('affectedRows', 1);
});

test('GetTodosPeriodos()', () => {
    return expect(periodo.getTodosPeriodosBD()).resolves.toEqual([{id: 1, ano: 2020, semestre: 1}, {id: 2, ano: 2020, semestre: 2}, {id: 3, ano: 2021, semestre: 1}]);
});