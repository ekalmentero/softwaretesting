const DisciplinaController = require('../controllers/disciplinaController');

// teste assíncrono - teste de integração, exercitando a arquitetura do software

test('GetDisciplina (sucesso)', () => {
    return expect(DisciplinaController.getDisciplina('744240')).resolves.toEqual([{ativo: 1, id: 1, nome: 'Analog Circuit Design', codigo: '744240'}]);
});

test('GetDisciplina (erro 1)', () => {
    return expect(DisciplinaController.getDisciplina('2573893')).rejects.toThrow("Nenhuma disciplina com este código encontrada");
});

test('GetDisciplina (erro 2)', () => {
    return expect(DisciplinaController.getDisciplina('abcdfe')).rejects.toThrow("Nenhuma disciplina com este código encontrada");
});

test('GetDisciplina (erro 3)', () => {
    return expect(DisciplinaController.getDisciplina(null)).rejects.toThrow("Nenhuma disciplina com este código encontrada");
});

test('GetTodasDisciplinas (sucesso)', () => {
    return expect(DisciplinaController.getTodasDisciplinas()).resolves.toEqual([{ativo: 1, id: 1, nome: 'Analog Circuit Design', codigo: '744240'},{ativo: 1, id: 2, nome: 'Analyst Programming', codigo: '341681'},{ativo: 1, id: 3, nome: 'Quality Control', codigo: '487990'},{ativo: 1, id: 4, nome: 'Web Designing I', codigo: '260076'},{ativo: 1, id: 5, nome: 'Software Testing', codigo: '818982'}]);
});

test('CreateDisciplina (sucesso)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '000000', 'nome': 'Coaching Quântico'})).resolves.toHaveProperty('affectedRows', 1);
});

test('CreateDisciplina (erro 1)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '000001'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 2)', () => {
    return expect(DisciplinaController.createDisciplina({'nome': 'Coaching Quântico'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 3)', () => {
    return expect(DisciplinaController.createDisciplina(null)).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 4)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': null, 'nome': 'Coaching Quântico'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 5)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 6)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('CreateDisciplina (erro 7)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': 1, 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('CreateDisciplina (erro 8)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '1234567', 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('CreateDisciplina (erro 9)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '1a3b45', 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('CreateDisciplina (erro 10)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('CreateDisciplina (erro 11)', () => {
    return expect(DisciplinaController.createDisciplina({'codigo': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateDisciplina (sucesso)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '000000', 'nome': 'Teoria da Absorção do Conhecimento'})).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateDisciplina (erro 1)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '000000'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 2)', () => {
    return expect(DisciplinaController.updateDisciplina({'nome': 'Teoria da Absorção do Conhecimento'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 3)', () => {
    return expect(DisciplinaController.updateDisciplina(null)).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 4)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '000001', 'nome': 'Teoria da Absorção do Conhecimento'})).rejects.toThrow("Falha ao atualizar disciplina/disciplina não encontrada");
});

test('UpdateDisciplina (erro 5)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 6)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 7)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': null, 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: informe todos os campos do objeto Disciplina");
});

test('UpdateDisciplina (erro 8)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': 1, 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('UpdateDisciplina (erro 9)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '1234567', 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('UpdateDisciplina (erro 10)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '1a3b45', 'nome': 'Dark Coaching Holístico'})).rejects.toThrow("Erro: O código deve conter exatamente 6 caracteres numéricos");
});

test('UpdateDisciplina (erro 11)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateDisciplina (erro 12)', () => {
    return expect(DisciplinaController.updateDisciplina({'codigo': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('DeleteDisciplina (sucesso)', () => {
    return expect(DisciplinaController.deleteDisciplina('000000')).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteDisciplina (erro 1)', () => {
    return expect(DisciplinaController.deleteDisciplina('000001')).rejects.toThrow("Falha ao remover disciplina/disciplina não encontrada");
});

test('DeleteDisciplina (erro 2)', () => {
    return expect(DisciplinaController.deleteDisciplina(1)).rejects.toThrow("Falha ao remover disciplina/disciplina não encontrada");
});

test('DeleteDisciplina (erro 3)', () => {
    return expect(DisciplinaController.deleteDisciplina(-1)).rejects.toThrow("Falha ao remover disciplina/disciplina não encontrada");
});

test('DeleteDisciplina (erro 4)', () => {
    return expect(DisciplinaController.deleteDisciplina(null)).rejects.toThrow("Falha ao remover disciplina/disciplina não encontrada");
});