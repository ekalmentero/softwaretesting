const AvaliacaoController = require('../../controllers/avaliacaoController');


let todasAvaliacoes = [

    {id: 1 , turma: '04', aluno: '2017390895', peso: 1, peso2: 2, nota: 6, nota2: 5},
    {id: 2 , turma: '05', aluno: '2017390078', peso: 1, peso2: 2, nota: 7, nota2: 6},
    {id: 3,  turma: '07', aluno: '2017390077', peso: 1, peso2: 2, nota: 6, nota2: 8},
    {id: 4,  turma: '09', aluno: '2017390214', peso: 1, peso2: 2, nota: 8, nota2: 9},
    {id: 9,  turma: '05', aluno: '2017390895', peso: 2, peso2: 2, nota: 6, nota2: 8},
    {id: 10, turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10},

];

// ------------------- create -------------


test('CreateAvaliacao (sucesso)', () => {

    return AvaliacaoController.createAvaliacao({ turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10}).then(data => {

      expect(data).toEqual(1);

    });
   
});


test('CreateAvaliacao (erro turma = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({aluno: '2017390666', peso: 1, peso2: 1, nota: 7, nota2: 7})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro aluno = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({turma: '05', peso: 2, peso2: 2, nota: 6, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro peso = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({turma: '05', aluno: '2017390666', peso2: 2, nota: 6, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro peso2 = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({turma: '05', aluno: '2017390666', peso: 1, nota: 7, nota2: 7})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro nota = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({turma: '05', aluno: '2017390666', peso: 2, peso2: 2, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro nota2 = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao({turma: '05', aluno: '2017390666', peso: 1, peso2: 1, nota: 7})).rejects.toThrow('Dados incompletos')
})

test('CreateAvaliacao (erro todos os campos = undefined/nulo)', () => {
  return expect(AvaliacaoController.createAvaliacao(null)).rejects.toThrow('Dados incompletos')
})

// ------------------- delete -------------
//toda vez q realizar esse teste de dele acrescentar 1 no parâmetro dele,
//  para ele apagar  a linha que o teste de create acima crio
test('DeleteAvaliacao (sucesso)', () => {
    return AvaliacaoController.deleteAvaliacao(17).then(data => {

     expect(data).toEqual(1);
  
    });
    
});

test('DeleteAvaliacao (erro id com mais de 2 dígitos)', () => {
  return expect(AvaliacaoController.deleteAvaliacao(145758855628966542)).rejects.toThrow('O id deve ter 1 ou 2 dígitos')
})

test('DeleteAvaliacao (erro id com menos de 2 dígitos)', () => {
  return expect(AvaliacaoController.deleteAvaliacao(1457586)).rejects.toThrow('O id deve ter 1 ou 2 dígitos')
})

test('DeleteAvaliacao (erro id igual a "0")', () => {
  return expect(AvaliacaoController.deleteAvaliacao(0)).rejects.toThrow('O id não pode ser igual a 0')
})

test('DeleteAvaliacao (erro matricula = undefined/nulo)', () => {
  return expect(AvaliacaoController.deleteAvaliacao(null)).rejects.toThrow('Dados inválidos')
})


// ------------------- update -------------

test('UpdateAvaliacao (sucesso)', () => {
    return AvaliacaoController.updateAvaliacao({id: 10, turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10}).then(data => {

        expect(data).toEqual(1);
  
      });
    
});

test('UpdateAvaliacao (erro turma = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 11, aluno: '2017390666', peso: 1, peso2: 1, nota: 7, nota2: 7})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro aluno = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 10, turma: '05', peso: 2, peso2: 2, nota: 6, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro peso = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 10, turma: '05', aluno: '2017390666', peso2: 2, nota: 6, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro peso2 = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 10, turma: '05', aluno: '2017390666', peso: 1, nota: 7, nota2: 7})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro nota = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 10, turma: '05', aluno: '2017390666', peso: 2, peso2: 2, nota2: 8})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro nota2 = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao({id: 10, turma: '05', aluno: '2017390666', peso: 1, peso2: 1, nota: 7})).rejects.toThrow('Dados incompletos')
})

test('UpdateAvaliacao (erro todos os campos = undefined/nulo)', () => {
  return expect(AvaliacaoController.updateAvaliacao(null)).rejects.toThrow('Dados incompletos')
})



// ------------------- get -------------

test('getAvaliacao (sucesso)', () => {
    return AvaliacaoController.getAvaliacao(1).then(data => {

        expect(data).toEqual([{id: 1 , turma: '04', aluno: '2017390895', peso: 1, peso2: 2, nota: 6, nota2: 5}]);
  
      });
    
});

test('getAvaliacao (id = undefined/nulo)', () => {
  return expect(AvaliacaoController.getAvaliacao(null)).rejects.toThrow('Nenhum avaliacao com este código encontrada')

    
});

// ------------------- getTodo -------------

test('getTodasAvaliacoes (sucesso)', () => {
    return AvaliacaoController.getTodasAvaliacoes().then(data => {

        expect(data).toEqual(todasAvaliacoes);
  
      });
   
});
