
const AlunoController = require('../../controllers/alunoController');



let todosAlunos = [

    { nome:'Zidane',    matricula: '2017390077'},
    { nome:'Cristovão', matricula: '2017390078'},
    { nome:'Camila',    matricula: '2017390214'},
    { nome:'Alexia',    matricula: '2017390895'},

];

// ------------------- createAluno -------------
test('CreateAluno (sucesso)', () => { 

    return AlunoController.createAluno({nome: 'Renan', matricula: '2017391077'}).then(data => {

      expect(data).toEqual(1);

    });

});

test('CreateAluno (erro nome = undefined/nulo)', () => {
  return expect(AlunoController.createAluno({matricula: '2017394577'})).rejects.toThrow('Dados incompletos')
})

test('CreateAluno (erro matricula = undefined/nulo)', () => {
  return expect(AlunoController.createAluno({nome: 'Cristovao Colombo'})).rejects.toThrow('Dados incompletos')
})

test('CreateAluno (erro nome e matricula = undefined/nulo)', () => {
  return expect(AlunoController.createAluno(null)).rejects.toThrow('Dados incompletos')
})


// ------------------- deleteAluno -------------

test('DeleteAluno (sucesso)', () => {
    return AlunoController.deleteAluno(2017391077).then(data => {

        expect(data).toEqual(1);
  
      });
    
});

test('deleteAluno (erro matricula com mais de 10 dígitos)', () => {
  return expect(AlunoController.deleteAluno(145758855628966542)).rejects.toThrow('A matricula deve conter 10 dígitos')
})

test('deleteAluno (erro matricula com menos de 10 dígitos)', () => {
  return expect(AlunoController.deleteAluno(1457586)).rejects.toThrow('A matricula deve conter 10 dígitos')
})

test('deleteAluno (erro matricula = undefined/nulo)', () => {
  return expect(AlunoController.deleteAluno(null)).rejects.toThrow('Dados inválidos')
})


// ------------------- updateAluno -------------


test('UpdateAluno (sucesso)', () => { 
    return AlunoController.updateAluno({ nome:'Zidane',    matricula: '2017390077'}).then(data => {

        expect(data).toEqual(1);
  
      });
   
});

test('updateAluno (erro nome = undefined/nulo)', () => {
  return expect(AlunoController.updateAluno({matricula: '2017394577'})).rejects.toThrow('Dados incompletos')
})

test('updateAluno (erro nome e matricula = undefined/nulo)', () => {
  return expect(AlunoController.updateAluno(null)).rejects.toThrow('Dados incompletos')
})


// ------------------- getAluno -------------

test('getAluno (sucesso)', () => {
    return AlunoController.getAluno('2017390077').then(data => {

        expect(data).toEqual([{nome: 'Zidane', matricula: '2017390077'}]);
  
      });
    
});

test('getAluno (erro matricula = undefined/nulo)', () => {
  return expect(AlunoController.getAluno(null)).rejects.toThrow('Nenhum aluno com esta matrícula encontrado')
})


// ------------------- getTodosAluno -------------

test('getTodosAlunos (sucesso)', () => { 
    return AlunoController.getTodosAlunos().then(data => {

        expect(data).toEqual(todosAlunos);
  
      });

});
