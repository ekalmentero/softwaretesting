//mocked test

const alunoModel = require('../models/alunoModel.js');

jest.mock('../models/alunoModel.js');

test('se foi utilizado o mock para teste', () => {
    expect(alunoModel.getAlunoBD(715752)).toEqual({matricula: 715752, nome: 'Abba'});
});

