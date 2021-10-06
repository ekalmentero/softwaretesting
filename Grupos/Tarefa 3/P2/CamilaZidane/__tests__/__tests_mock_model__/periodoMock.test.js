const periodo = require('../../models/__mocks__/periodoMock');

jest.mock('../../models/periodoModel');

test('Teste de MOCK do getPeriodoBD ', () => {
    return periodo.getPeriodo(1).then(data => {

        expect(data).toEqual({ id:1,     ano: 2020,     semestre: 1 });
  
      });

});

let todosPeriodos = [

    { id:1,     ano: 2020,     semestre: 1 },
    { id:2,     ano: 2020,     semestre: 2 },
    { id:3,     ano: 2021,     semestre: 1 },
    { id:4,     ano: 2021,     semestre: 2 },

];

test('Teste de MOCK do getTodosPeriodosBD()', () => {
    return periodo.getTodosPeriodos().then(data => {

        expect(data).toEqual(todosPeriodos);
  
      });


});

test('Teste de MOCK do createPeriodoBD()', () => {
return periodo.createPeriodo({ id:1,     ano: 2020,     semestre: 1 }).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('Teste de MOCK do deletePeriodoBD()', () => {
return periodo.deletePeriodo(1).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('Teste de MOCK do updatePeriodoBD()', () => {
    return periodo.updatePeriodo({ id:1,     ano: 2020,     semestre: 1 }).then(data => {

      expect(data).toEqual(1);

    });
    
});