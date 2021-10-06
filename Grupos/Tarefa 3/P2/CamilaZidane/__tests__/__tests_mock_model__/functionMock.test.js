const fuction = require('../../models/__mocks__/functionMock');

jest.mock('../../models/functionModel');

let todasAvaliacoes = [

    {peso: 1 , peso2: 2, nota: 6,  nota2: 5},
    {peso: 2 , peso2: 2, nota: 6,  nota2: 8},
    {peso: 1,  peso2: 1, nota: 10, nota2: 10},

];

let dadosCalcCRPeriodo = [

    {id: 1, nota: 6 ,  nota2: 8,  peso: 2,  peso2: 2},
    {id: 1, nota: 10 , nota2: 10, peso: 1,  peso2: 1},

];

let dadosCalcMediaPeriodo = [

    {peso: 1 , peso2: 2, nota: 6,  nota2: 5},

];


test('Teste de MOCK do calcularCRTotalBD ', () => {

    return fuction.calcularCRTotal(2017390895).then(data => {

        expect(data).toEqual(todasAvaliacoes);
  
      });
});

test('Teste de MOCK do calcularCRPeriodoBD ', () => {

    return fuction.calcularCRPeriodo(2017390895).then(data => {

        expect(data).toEqual(dadosCalcCRPeriodo);
  
      });
});

test('Teste de MOCK do calcularMediaDisciplinaBD ', () => {

    return fuction.calcularMediaDisciplina(2017390895,'04').then(data => {

        expect(data).toEqual(dadosCalcMediaPeriodo);
  
    });
});
