const turma = require('../../models/__mocks__/turmaMock');

jest.mock('../../models/turmaModel');

test('Teste de MOCK do getTurmaBD ', () => {

    return turma.getTurma('04').then(data => {

        expect(data).toEqual({ codigo: '04',      professor: 2017290789, disciplina: '004',     periodo: 4 });
  
      });
});

let todasTurmas = [

    { codigo: '04',      professor: 2017290789, disciplina: '004',     periodo: 4 },
    { codigo: '05',      professor: 2017290051, disciplina: '002',     periodo: 1 },
    { codigo: '07',      professor: 2017290456, disciplina: '001',     periodo: 3 },
    { codigo: '09',      professor: 2017290078, disciplina: '003',     periodo: 2 },
    { codigo: 'benzema', professor: '00001',      disciplina: 'benzema', periodo: 1 },

];

test('Teste de MOCK do getTodasTurmasBD()', () => {
    return turma.getTodasTurmas().then(data => {

        expect(data).toEqual(todasTurmas);
  
      });
    
});

test('Teste de MOCK do createTurmaBD()', () => {
return turma.createTurma({ codigo: '05',      professor: 2017290789, disciplina: '004',     periodo: 4 }).then(data => {

      expect(data).toEqual(1);

    });
});

test('Teste de MOCK do deleteTurmaBD()', () => {
return turma.deleteTurma('001').then(data => {

      expect(data).toEqual(1);

    });
});

test('Teste de MOCK do updateTurmaBD()', () => {
return turma.updateTurma({ codigo: '04',      professor: 2017290789, disciplina: '004',     periodo: 4 }).then(data => {

      expect(data).toEqual(1);

    });    
});