const ProfessorController = require('../controllers/professorController');

// teste assíncrono - teste de integração, exercitando a arquitetura do software

test('GetProfessor (sucesso)', () => {
    return expect(ProfessorController.getProfessor('377427')).resolves.toEqual([{"id": 2, "nome": 'Cordelie Mateiko', "matricula": '377427', "ativo": 1}]);
})

test('GetProfessor (erro 1)', () => {
    return expect(ProfessorController.getProfessor('2573893')).rejects.toThrow("Nenhum professor com esta matrícula encontrado");
})

test('GetProfessor (erro 2)', () => {
    return expect(ProfessorController.getProfessor('abcdfe')).rejects.toThrow("Nenhum professor com esta matrícula encontrado");
})

test('GetProfessor (erro 3)', () => {
    return expect(ProfessorController.getProfessor(null)).rejects.toThrow("Nenhum professor com esta matrícula encontrado");
})

test('GetTodosProfessores (sucesso)', () => {
    return expect(ProfessorController.getTodosProfessores()).resolves.toEqual([{ativo: 1, id: 1, matricula: '177631', nome: 'Alphonso Landeg'},{ativo: 1, id: 2, matricula: '377427', nome: 'Cordelie Mateiko'}]);
});

test('CreateProfessor (sucesso)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '000000', 'nome': 'Fulano Ciclano'})).resolves.toHaveProperty('affectedRows', 1);
});

test('CreateProfessor (erro 1)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '000001'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 2)', () => {
    return expect(ProfessorController.createProfessor({'nome': 'Fulano Ciclano'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 3)', () => {
    return expect(ProfessorController.createProfessor(null)).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 4)', () => {
    return expect(ProfessorController.createProfessor({'matricula': null, 'nome': 'Fulano Ciclano'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 5)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 6)', () => {
    return expect(ProfessorController.createProfessor({'matricula': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('CreateProfessor (erro 7)', () => {
    return expect(ProfessorController.createProfessor({'matricula': 1, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateProfessor (erro 8)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '1234567', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateProfessor (erro 9)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '1a3b45', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateProfessor (erro 10)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('CreateProfessor (erro 11)', () => {
    return expect(ProfessorController.createProfessor({'matricula': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateProfessor (sucesso)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '000000', 'nome': 'Beltrano'})).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateProfessor (erro 1)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '000000'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 2)', () => {
    return expect(ProfessorController.updateProfessor({'nome': 'Beltrano'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 3)', () => {
    return expect(ProfessorController.updateProfessor(null)).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 4)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '000001', 'nome': 'Beltrano'})).rejects.toThrow("Falha ao atualizar professor/professor não encontrado");
});

test('UpdateProfessor (erro 5)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 6)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 7)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': null, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: informe todos os campos do objeto Professor");
});

test('UpdateProfessor (erro 8)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': 1, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateProfessor (erro 9)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '1234567', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateProfessor (erro 10)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '1a3b45', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateProfessor (erro 11)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateProfessor (erro 12)', () => {
    return expect(ProfessorController.updateProfessor({'matricula': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('DeleteProfessor (sucesso)', () => {
    return expect(ProfessorController.deleteProfessor('000000')).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteProfessor (erro 1)', () => {
    return expect(ProfessorController.deleteProfessor('000001')).rejects.toThrow("Falha ao remover professor/professor não encontrado");
});

test('DeleteProfessor (erro 2)', () => {
    return expect(ProfessorController.deleteProfessor(1)).rejects.toThrow("Falha ao remover professor/professor não encontrado");
});

test('DeleteProfessor (erro 3)', () => {
    return expect(ProfessorController.deleteProfessor(-1)).rejects.toThrow("Falha ao remover professor/professor não encontrado");
});

test('DeleteProfessor (erro 4)', () => {
    return expect(ProfessorController.deleteProfessor(null)).rejects.toThrow("Falha ao remover professor/professor não encontrado");
});