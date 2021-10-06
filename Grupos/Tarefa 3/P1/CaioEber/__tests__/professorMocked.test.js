const professor = require('../models/professor.js');

jest.mock('../models/professor.js');

test('Mock do modelo professor', () => {
    return expect(professor.getProfessorBD('177631')).resolves.toEqual([{matricula: '177631', nome: 'Alphonso Landeg'}]);
});

test('CreateProfessor()', () => {
    return expect(professor.createProfessorBD({nome: 'Brendin Witul', matricula: '257389'})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteProfessor()', () => {
    return expect(professor.deleteProfessorBD('177631')).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateProfessor()', () => {
    return expect(professor.updateProfessorBD({matricula: '177631', nome: 'Andstrem Landeg'})).resolves.toHaveProperty('affectedRows', 1);
});

test('GetTodosProfessores()', () => {
    return expect(professor.getTodosProfessoresBD()).resolves.toEqual([{matricula: '177631', nome: 'Alphonsu Landeg'}, {matricula: '377427', nome: 'Cordelie Mateiko'}]);
});