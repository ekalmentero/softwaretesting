const aluno = require('../mock/aluno');

jest.mock('../aluno.js');

test('Teste de MOCK do getAluno ', () => {
    expect(aluno.getAluno(548739)).toEqual({matricula: 548739, nome: 'Caye'});
});

let todosAlunos = [
        { nome: 'Cordey', matricula: 423469 },
        { nome: 'Monique', matricula: 512828 },
        { nome: 'Mort', matricula: 741936 },
        { nome: 'Richie', matricula: 784993 },
        { nome: 'Matteo', matricula: 849586 },
        { nome: 'Prisca', matricula: 904059 },
        { nome: 'Maurizia', matricula: 814481 },
        { nome: 'Steve', matricula: 686898 },
        { nome: 'Caye', matricula: 548739 },
        { nome: 'Durand', matricula: 187782 },
];

test('Teste de MOCK do getTodos()', () => {
    expect(aluno.getTodos()).toEqual(todosAlunos);
});