const aluno = require('../models/aluno.js');


test('se foi utilizado o modelo original para teste', () => {
    expect(aluno.getAluno(701677)).toEqual({matricula: 701677, nome: 'Abba'});
});