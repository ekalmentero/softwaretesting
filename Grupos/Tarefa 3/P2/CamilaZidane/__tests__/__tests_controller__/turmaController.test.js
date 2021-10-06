const TurmaController = require('../../controllers/turmaController');


let todasTurmas = [

    { codigo: '04',      professor: '2017290789', disciplina: '004',     periodo: 4 },
    { codigo: '05',      professor: '2017290051', disciplina: '002',     periodo: 1 },
    { codigo: '07',      professor: '2017290456', disciplina: '001',     periodo: 3 },
    { codigo: '09',      professor: '2017290078', disciplina: '003',     periodo: 2 },
    { codigo: 'benzema', professor: '00001',    disciplina: 'benzema', periodo: 1 },


];

// ------------------- create -------------


test('CreateTurma (sucesso)', () => {

    return TurmaController.createTurma({ codigo: '02',  professor: 2017290456, disciplina: '001',  periodo: 4 }).then(data => {

      expect(data).toEqual(1);

    });
});

test('CreateTurma (erro codigo = undefined/nulo)', () => {
  return expect(TurmaController.createTurma({professor: 2017123789, disciplina: '123',  periodo: 2})).rejects.toThrow('Dados incompletos')
})

test('CreateTurma (erro professor = undefined/nulo)', () => {
  return expect(TurmaController.createTurma({ codigo: '02', disciplina: '123',  periodo: 2})).rejects.toThrow('Dados incompletos')
})

test('CreateTurma (erro disciplina = undefined/nulo)', () => {
  return expect(TurmaController.createTurma({ codigo: '02',  professor: 2017123789,  periodo: 2})).rejects.toThrow('Dados incompletos')
})

test('CreateTurma (erro periodo = undefined/nulo)', () => {
  return expect(TurmaController.createTurma({ codigo: '02',  professor: 2017123789, disciplina: '123'})).rejects.toThrow('Dados incompletos')
})

test('CreateTurma (erro todos os campos = undefined/nulo)', () => {
  return expect(TurmaController.createTurma(null)).rejects.toThrow('Dados incompletos')
})
// ------------------- delete -------------

test('DeleteTurma (sucesso)', () => {

    return TurmaController.deleteTurma('02').then(data => {

      expect(data).toEqual(1);

    });
});

test('DeleteTurma (erro codigo com mais de 2 dígitos)', () => {
  return expect(TurmaController.deleteTurma(145758855628966542)).rejects.toThrow('O codigo deve ter 1 ou 2 dígitos')
})

test('DeleteTurma (erro codigo com menos de 2 dígitos)', () => {
  return expect(TurmaController.deleteTurma(2)).rejects.toThrow('O codigo deve ter 1 ou 2 dígitos')
})

test('DeleteTurma (erro codigo igual a "0")', () => {
  return expect(TurmaController.deleteTurma(0)).rejects.toThrow('O codigo deve ter 1 ou 2 dígitos')
})

test('DeleteTurma (erro matricula = undefined/nulo)', () => {
  return expect(TurmaController.deleteTurma(null)).rejects.toThrow('Dados inválidos')
})
// ------------------- update -------------

test('UpdateTurma (sucesso)', () => {

    return TurmaController.updateTurma({ codigo: '04',      professor: 2017290789, disciplina: '004',     periodo: 4 }).then(data => {

      expect(data).toEqual(1);

    });
});

// '' --> string vazia 

test('UpdateTurma (erro codigo = undefined/nulo)', () => {
  return expect(TurmaController.updateTurma({professor: 2017290789, disciplina: '004',     periodo: 4 })).rejects.toThrow('Dados incompletos')
})

test('UpdateTurma (erro professsor = undefined/nulo)', () => {
  return expect(TurmaController.updateTurma({codigo: '04', disciplina: '004',     periodo: 4 })).rejects.toThrow('Dados incompletos')
})

test('UpdateTurma (erro disciplina = undefined/nulo)', () => {
  return expect(TurmaController.updateTurma({codigo: '04', professor: 2017290789, periodo: 4 })).rejects.toThrow('Dados incompletos')
})

test('UpdateTurma (erro periodo = undefined/nulo)', () => {
  return expect(TurmaController.updateTurma({codigo: '04', professor: 2017290789, disciplina: '004',})).rejects.toThrow('Dados incompletos')
})
test('UpdateTurma (erro todos os campos = undefined/nulo)', () => {
  return expect(TurmaController.updateTurma(null)).rejects.toThrow('Dados incompletos')
})
// ------------------- get -------------

//esse id existe???
test('getTurma (sucesso)', () => {

    return TurmaController.getTurma('04').then(data => {

      expect(data).toEqual([{ codigo: '04',      professor: '2017290789', disciplina: '004',     periodo: 4 }]);

    });
});

test('getTurma (codigo = undefined/nulo)', () => {
  return expect(TurmaController.getTurma(null)).rejects.toThrow('Nenhum turma com este código encontrado')

    
});
// ------------------- getTodo -------------

test('getTodasTurmas (sucesso)', () => {

    return TurmaController.getTodasTurmas().then(data => {

      expect(data).toEqual(todasTurmas);

    });
});
