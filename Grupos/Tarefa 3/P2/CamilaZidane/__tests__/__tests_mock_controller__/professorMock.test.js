const professor = require('../../models/__mocks__/professorMock');

jest.mock('../../models/professorModel');

test('Teste de MOCK do getProfessorBD ', () => {

    return professor.getProfessor(2017290078).then(data => {

        expect(data).toEqual({ nome:'Rizzo',    matricula: 2017290078});
  
      });
});

let todosProfessores = [

    { nome:'Rizzo',    matricula: '2017290078'},
    { nome:'Kinder',   matricula: '2017290051'},
    { nome:'Juliana',  matricula: '2017290456'},
    { nome:'Serra',    matricula: '2017290789'},
    { nome:'benzema',  matricula: '00001'},

];

test('Teste de MOCK do getTodosBD()', () => {
    return professor.getTodosProfessores().then(data => {

        expect(data).toEqual(todosProfessores);
  
      });
});

test('Teste de MOCK do createProfessorBD()', () => {
return professor.createProfessor({ nome:'Rizzo',    matricula: '2017290078'}).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('Teste de MOCK do deleteProfessorBD()', () => {
return professor.deleteProfessor(2017290078).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('Teste de MOCK do updateProfessorBD()', () => {
        return professor.updateProfessor({ nome:'Rizzo',    matricula: '2017290078'}).then(data => {

      expect(data).toEqual(1);

    });
    
});