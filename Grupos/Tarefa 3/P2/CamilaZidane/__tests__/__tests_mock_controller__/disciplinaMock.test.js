const disciplina = require('../../models/__mocks__/disciplinaMock');

jest.mock('../../models/disciplinaModel');


test('Teste de MOCK do getdisciplinaBD', () => {

    return disciplina.getDisciplina('001').then(data => {

      expect(data).toEqual({ codigo:'001',     nome: 'BD1'});

    });

});

let todasdisciplinas = [

    { codigo:'001',     nome: 'BD1'},
    { codigo:'002',     nome: 'LP2'},
    { codigo:'003',     nome: 'AED1'},
    { codigo:'004',     nome: 'SO'},
    { codigo:'benzema', nome: '00001'},

];

test('Teste de MOCK do getTodasAvalicoesBD', () => {

    return disciplina.getTodasDisciplinas().then(data => {

      expect(data).toEqual(todasdisciplinas);

    });

});


test('Teste de MOCK do createdisciplinaBD', () => {

    return disciplina.createDisciplina({ codigo:'006',     nome: 'Opt 01'}).then(data => {

      expect(data).toEqual(1);

    });

});

test('Teste de MOCK do deletedisciplinaBD', () => {

    return disciplina.deleteDisciplina('001').then(data => {

      expect(data).toEqual(1);

    });

});

test('Teste de MOCK do updatedisciplinaBD', () => {

    return disciplina.updateDisciplina({ codigo:'002',     nome: 'LP2'}).then(data => {

      expect(data).toEqual(1);

    });

});

