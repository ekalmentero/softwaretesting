const DisciplinaController = require('../../controllers/disciplinaController');


let todasDisciplinas = [

    { codigo:'001',     nome: 'BD1'},
    { codigo:'002',     nome: 'LP2'},
    { codigo:'003',     nome: 'AED1'},
    { codigo:'004',     nome: 'SO'},
    { codigo:'benzema', nome: '00001'},

];

// ------------------- create -------------
//turma com string(disciplinamocktest)
test('CreateDisciplina (sucesso)', () => {

    return DisciplinaController.createDisciplina({ codigo:'005',     nome: 'SO'}).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('CreateDisciplina (erro nome = undefined/nulo)', () => {
  return expect(DisciplinaController.createDisciplina({matricula: '027'})).rejects.toThrow('Dados incompletos')
})

test('CreateDisciplina (erro codigo = undefined/nulo)', () => {
  return expect(DisciplinaController.createDisciplina({nome: 'TPE'})).rejects.toThrow('Dados incompletos')
})

test('CreateDisciplina (erro nome e codigo = undefined/nulo)', () => {
  return expect(DisciplinaController.createDisciplina(null)).rejects.toThrow('Dados incompletos')
})
// ------------------- delete -------------
test('DeleteDisciplina (sucesso)', () => {

    return DisciplinaController.deleteDisciplina('005').then(data => {

      expect(data).toEqual(1);

    });
    
});

test('DeleteDisciplina (erro matricula com mais de 3 dígitos)', () => {
  return expect(DisciplinaController.deleteDisciplina('145758855628966542')).rejects.toThrow('O código deve conter 3 dígitos')
})

test('DeleteDisciplina (erro matricula com menos de 3 dígitos)', () => {
  return expect(DisciplinaController.deleteDisciplina('12')).rejects.toThrow('O código deve conter 3 dígitos')
})

test('DeleteDisciplina (erro matricula = undefined/nulo)', () => {
  return expect(DisciplinaController.deleteDisciplina(null)).rejects.toThrow('Dados inválidos')
})
// ------------------- update -------------
test('UpdateDisciplina (sucesso)', () => {

    return DisciplinaController.updateDisciplina({ codigo:'001',     nome: 'BD1'}).then(data => {

      expect(data).toEqual(1);

    });
    
});

test('UpdateDisciplina (erro nome = undefined/nulo)', () => {
  return expect(DisciplinaController.updateDisciplina({codigo: '027'})).rejects.toThrow('Dados incompletos')
})
test('UpdateDisciplina (erro codigo = undefined/nulo)', () => {
  return expect(DisciplinaController.updateDisciplina({nome: 'TPE'})).rejects.toThrow('Dados incompletos')
})

test('UpdateDisciplina (erro nome e codigo = undefined/nulo)', () => {
  return expect(DisciplinaController.updateDisciplina(null)).rejects.toThrow('Dados incompletos')
})
// ------------------- get -------------

test('getDisciplina (sucesso)', () => {

    return DisciplinaController.getDisciplina('001').then(data => {

      expect(data).toEqual([{ codigo:'001',     nome: 'BD1'}]);

    });
    
});

test('getDisciplina (erro codigo = undefined/nulo)', () => {
  return expect(DisciplinaController.getDisciplina(null)).rejects.toThrow('Nenhuma disciplina com este código encontrada')
})



// ------------------- getTodo -------------
test('getTodosDisciplinas (sucesso)', () => {

    return DisciplinaController.getTodasDisciplinas().then(data => {

      expect(data).toEqual(todasDisciplinas);

    });
    
});