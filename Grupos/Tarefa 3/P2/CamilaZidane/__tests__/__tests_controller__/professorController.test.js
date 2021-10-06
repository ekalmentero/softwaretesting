const ProfessorController = require('../../controllers/professorController');



let todosProfessores = [

    { nome:'benzema', matricula: '00001'},
    { nome:'Kinder',  matricula: '2017290051'},
    { nome:'Rizzo',   matricula: '2017290078'},
    { nome:'Juliana', matricula: '2017290456'},
    { nome:'Serra',   matricula: '2017290789'},


];

// ------------------- create -------------

test('CreateProfessor (sucesso)', () => {

    return ProfessorController.createProfessor({nome: 'Tiago', matricula: '2017291239'}).then(data => {

      expect(data).toEqual(1);

    });
    
});


test('CreateProfessor (erro nome = undefined/nulo)', () => {
  return expect(ProfessorController.createProfessor({matricula: '201777777'})).rejects.toThrow('Dados incompletos')
})

test('CreateProfessor (erro matricula = undefined/nulo)', () => {
  return expect(ProfessorController.createProfessor({nome: 'Cristovao Colombo'})).rejects.toThrow('Dados incompletos')
})

test('CreateProfessor (erro nome e matricula = undefined/nulo)', () => {
  return expect(ProfessorController.createProfessor(null)).rejects.toThrow('Dados incompletos')
})
// ------------------- delete -------------
test('DeleteProfessor (sucesso)', () => {

    return ProfessorController.deleteProfessor(2017291239).then(data => {

      expect(data).toEqual(1);

    });
    
});


test('DeleteProfessor (erro matricula com mais de 10 dígitos)', () => {
  return expect(ProfessorController.deleteProfessor(145758855628966542)).rejects.toThrow('A matricula deve conter 10 dígitos')
})

test('DeleteProfessor (erro matricula com menos de 10 dígitos)', () => {
  return expect(ProfessorController.deleteProfessor(1457586)).rejects.toThrow('A matricula deve conter 10 dígitos')
})

test('DeleteProfessor (erro matricula = undefined/nulo)', () => {
  return expect(ProfessorController.deleteProfessor(null)).rejects.toThrow('Dados inválidos')
})

// ------------------- update -------------

test('UpdateProfessor (sucesso)', () => {

    return ProfessorController.updateProfessor({ nome:'Rizzo',    matricula: '2017290078'}).then(data => {

      expect(data).toEqual(1);

    });
});



test('UpdateProfessor (erro nome = undefined/nulo)', () => {
  return expect(ProfessorController.updateProfessor({matricula: '2017394577'})).rejects.toThrow('Dados incompletos')
})

test('UpdateProfessor (erro nome e matricula = undefined/nulo)', () => {
  return expect(ProfessorController.updateProfessor(null)).rejects.toThrow('Dados incompletos')
})

// ------------------- get -------------

test('getProfessor (sucesso)', () => {

    return ProfessorController.getProfessor(2017290078).then(data => {

      expect(data).toEqual([{ nome:'Rizzo',    matricula: '2017290078'}]);

    });
});

test('getProfessor (erro matricula = undefined/nulo)', () => {
  return expect(ProfessorController.getProfessor(null)).rejects.toThrow('Nenhum professor com esta matrícula encontrado')
})

// ------------------- getTodo -------------

test('getTodosProfessores (sucesso)', () => {

    return ProfessorController.getTodosProfessores().then(data => {

      expect(data).toEqual(todosProfessores);

    });
});
