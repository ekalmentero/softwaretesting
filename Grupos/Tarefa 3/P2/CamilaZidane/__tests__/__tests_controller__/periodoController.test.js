const PeriodoController = require('../../controllers/periodoController');



let todosPeriodos = [

    { id:1,     ano: 2020,     semestre: 1 },
    { id:2,     ano: 2020,     semestre: 2 },
    { id:3,     ano: 2021,     semestre: 1 },
    { id:4,     ano: 2021,     semestre: 2 },

];

// ------------------- create -------------

test('CreatePeriodo (sucesso)', () => {

    return PeriodoController.createPeriodo({ ano: 2022,     semestre: 1 }).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('CreatePeriodo (erro ano = undefined/nulo)', () => {
  return expect(PeriodoController.createPeriodo({semestre: '1'})).rejects.toThrow('Dados incompletos')
})

test('CreatePeriodo (erro semestre = undefined/nulo)', () => {
  return expect(PeriodoController.createPeriodo({ano: '2023'})).rejects.toThrow('Dados incompletos')
})

test('CreatePeriodo (erro ano e semestre = undefined/nulo)', () => {
  return expect(PeriodoController.createPeriodo(null)).rejects.toThrow('Dados incompletos')
})

// ------------------- delete -------------
//toda vez q realizar esse teste de dele acrescentar 1 no parâmetro dele,
//  para ele apagar  a linha que o teste de create acima crio
test('DeletePeriodo (sucesso)', () => {

    return PeriodoController.deletePeriodo(23).then(data => {

      expect(data).toEqual(1);

    });
    
});


test('DeletePeriodo (erro id com mais de 2 dígitos)', () => {
  return expect(PeriodoController.deletePeriodo(145758855628966542)).rejects.toThrow('O id deve ter 1 ou 2 dígitos')
})

test('DeletePeriodo (erro id com menos de 2 dígitos)', () => {
  return expect(PeriodoController.deletePeriodo(1457586)).rejects.toThrow('O id deve ter 1 ou 2 dígitos')
})

test('DeletePeriodo (erro id igual a "0")', () => {
  return expect(PeriodoController.deletePeriodo(0)).rejects.toThrow('O id não pode ser igual a 0')
})

test('DeletePeriodo (erro matricula = undefined/nulo)', () => {
  return expect(PeriodoController.deletePeriodo(null)).rejects.toThrow('Dados inválidos')
})

// ------------------- update -------------
test('UpdatePeriodo (sucesso)', () => {
  return PeriodoController.updatePeriodo({ id:1,     ano: 2020,     semestre: 1 }).then(data => {

      expect(data).toEqual(1);

    });
  
});

test('UpdatePeriodo (erro ano = undefined/nulo)', () => {
  return expect(PeriodoController.updatePeriodo({ id:1, semestre: 1})).rejects.toThrow('Dados incompletos')
})

test('UpdatePeriodo (erro semestre = undefined/nulo)', () => {
  return expect(PeriodoController.updatePeriodo({ id:1, ano: 2020})).rejects.toThrow('Dados incompletos')
})

test('UpdatePeriodo (erro todos os campos = undefined/nulo)', () => {
  return expect(PeriodoController.updatePeriodo(null)).rejects.toThrow('Dados incompletos')
})

// ------------------- get -------------

test('getPeriodo (sucesso)', () => {

    return PeriodoController.getPeriodo(1).then(data => {

      expect(data).toEqual([{ id:1,     ano: 2020,     semestre: 1 }]);

    });
    
});

test('getPeriodo (id = undefined/nulo)', () => {
  return expect(PeriodoController.getPeriodo(null)).rejects.toThrow('Nenhum periodo com este id encontrado')

    
}); 
// ------------------- getTodo -------------
test('getTodosPeriodos (sucesso)', () => {

    return PeriodoController.getTodosPeriodos().then(data => {

      expect(data).toEqual(todosPeriodos);

    });
    
});
