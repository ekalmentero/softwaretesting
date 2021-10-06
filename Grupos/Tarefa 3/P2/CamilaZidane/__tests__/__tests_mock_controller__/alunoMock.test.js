const aluno = require('../../models/__mocks__/alunoMock');

jest.mock('../../models/alunoModel');


test('Teste de MOCK do getAlunoBD', () => {

    return aluno.getAluno(2017390077).then(data => {

      expect(data).toEqual({nome: 'Zidane', matricula: 2017390077});

    });

});


let todosAlunos = [

    { nome:'Zidane',    matricula: '2017390077'},
    { nome:'Cristovão', matricula: '2017390078'},
    { nome:'Camila',    matricula: '2017390214'},
    { nome:'Alexia',    matricula: '2017390895'},

];


test('Teste de MOCK do getTodosBD', () => {

    return aluno.getTodosAlunos().then(data => {

      expect(data).toEqual(todosAlunos);

    });

});

test('Teste de MOCK do createAlunoBD', () => {

    return aluno.createAluno({nome: 'TESTE', matricula: 1111111}).then(data => {

      expect(data).toEqual(1);

    });

});

test('Teste de MOCK do deleteAlunoBD', () => {

    return aluno.deleteAluno(1111111).then(data => {

      expect(data).toEqual(1);

    });

});

test('Teste de MOCK do updateAlunoBD', () => {

    return aluno.updateAluno({nome: 'TESTE', matricula: 1111111}).then(data => {

      expect(data).toEqual(1);

    });

});

