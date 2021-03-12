//mocked test

const aluno = require('../models/aluno.js');

jest.mock('../models/aluno.js');

test('se foi utilizado o mock para teste', () => {
    expect(aluno.getAluno(715752)).toEqual({matricula: 715752, nome: 'Abba'});
});

