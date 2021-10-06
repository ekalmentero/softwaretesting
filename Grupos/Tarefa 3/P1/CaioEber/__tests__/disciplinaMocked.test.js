const disciplina = require('../models/disciplina.js');

jest.mock('../models/disciplina.js');

test('GetDisciplina()', () => {
    return expect(disciplina.getDisciplinaBD('487990')).resolves.toEqual([{nome: 'Quality Control', codigo: '487990'}]);
});

test('CreateDisciplina()', () => {
    return expect(disciplina.createDisciplinaBD({nome: 'Quality Control II', codigo: '487357'})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteDisciplina()', () => {
    return expect(disciplina.deleteDisciplinaBD('487990')).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateDisciplina()', () => {
    return expect(disciplina.updateDisciplinaBD({nome: 'Software Quality II', codigo: '487357'})).resolves.toHaveProperty('affectedRows', 1);
});

test('GetTodasDisciplinas()', () => {
    return expect(disciplina.getTodasDisciplinasBD()).resolves.toEqual([{nome: 'Analog Circuit Design', codigo: '744240'}, {nome: 'Analyst Programming', codigo: '341681'}, {nome: 'Quality Control', codigo: '487990'}, {nome: 'Web Designing I', codigo: '260076'}, {nome: 'Software Testing', codigo: '818982'}]);
});