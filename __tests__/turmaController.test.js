const TurmaController = require('../controllers/turmaController');

// teste assíncrono - teste de integração, exercitando a arquitetura do software

test('GetMedia (sucesso)', () => {
    return TurmaController.getMedia('7287').then(resultado => {
        let media = resultado.media;
        expect(parseFloat(media.toFixed(2))).toEqual(5.50);
        expect(media).toBeGreaterThanOrEqual(0);
        expect(media).toBeLessThanOrEqual(10);
    });
});

test('GetMedia (erro 1)', () => {
    return TurmaController.getMedia('1111').then(resultado => {
        let media = resultado.media;
        expect(media).toBeNaN();
    });
});

test('GetMedia (erro 2)', () => {
    return expect(TurmaController.getMedia(null)).rejects.toThrow("Nenhuma turma encontrada");
});

test('GetMedia (erro 3)', () => {
    return expect(TurmaController.getMedia('123')).rejects.toThrow("Nenhuma turma encontrada");
});

test('GetMedia (erro 4)', () => {
    return expect(TurmaController.getMedia('12345')).rejects.toThrow("Nenhuma turma encontrada");
});

test('GetMedia (erro 5)', () => {
    return expect(TurmaController.getMedia('abc')).rejects.toThrow("Nenhuma turma encontrada");
});

test('GetMedia (erro 6)', () => {
    return expect(TurmaController.getMedia('abcd')).rejects.toThrow("Nenhuma turma encontrada");
});

test('GetTurma (sucesso)', () => {
    return expect(TurmaController.getTurma('7287')).resolves.toEqual([{ativo: 1, id: 1, codigo: '7287', id_periodo: 2, id_professor: 2, id_disciplina: 2}]);
});

test('GetTurma (erro 1)', () => {
    return expect(TurmaController.getTurma('872878')).rejects.toThrow("Nenhuma turma com este código encontrada");
});

test('GetTurma (erro 2)', () => {
    return expect(TurmaController.getTurma('abc')).rejects.toThrow("Nenhuma turma com este código encontrada");
});

test('GetTurma (erro 3)', () => {
    return expect(TurmaController.getTurma(null)).rejects.toThrow("Nenhuma turma com este código encontrada");
});

test('GetTurma (erro 4)', () => {
    return expect(TurmaController.getTurma(-1)).rejects.toThrow("Nenhuma turma com este código encontrada");
});

test('GetTodasTurmas (sucesso)', () => {
    return expect(TurmaController.getTodasTurmas()).resolves.toEqual([{ativo: 1, id: 1, codigo: '7287', id_periodo: 2, id_professor: 2, id_disciplina: 2},{ativo: 1, id: 2, codigo: '6726', id_periodo: 3, id_professor: 1, id_disciplina: 5},{ativo: 1, id: 3, codigo: '3617', id_periodo: 2, id_professor: 1, id_disciplina: 4},{ativo: 1, id: 4, codigo: '9269', id_periodo: 1, id_professor: 2, id_disciplina: 2},{ativo: 1, id: 5, codigo: '9496', id_periodo: 2, id_professor: 1, id_disciplina: 5}]);
});

test('CreateTurma (sucesso)', () => {
    return expect(TurmaController.createTurma({codigo: '1111', id_periodo: 1, id_professor: 2, id_disciplina: 3})).resolves.toHaveProperty('affectedRows', 1);
});

test('CreateTurma (erro 1)', () => {
    return expect(TurmaController.createTurma({codigo: '1111', id_periodo: 1})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('CreateTurma (erro 2)', () => {
    return expect(TurmaController.createTurma({codigo: '1111', id_periodo: null})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('CreateTurma (erro 3)', () => {
    return expect(TurmaController.createTurma({codigo: null, id_periodo: null, id_professor: null, id_disciplina: null})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('CreateTurma (erro 4)', () => {
    return expect(TurmaController.createTurma({codigo: null, id_periodo: 2, id_professor: 1, id_disciplina: null})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('CreateTurma (erro 5)', () => {
    return expect(TurmaController.createTurma({codigo: '123', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('CreateTurma (erro 6)', () => {
    return expect(TurmaController.createTurma({codigo: '12345', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('CreateTurma (erro 7)', () => {
    return expect(TurmaController.createTurma({codigo: 'abc', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('CreateTurma (erro 8)', () => {
    return expect(TurmaController.createTurma({codigo: 'abcd', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('CreateTurma (erro 9)', () => {
    return expect(TurmaController.createTurma({codigo: '0001', id_periodo: -2, id_professor: -1, id_disciplina: 3})).rejects.toThrow("Erro: Os IDs devem conter somente números");
});

test('CreateTurma (erro 10)', () => {
    return expect(TurmaController.createTurma({codigo: '0001', id_periodo: 'abc', id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: Os IDs devem conter somente números");
});

test('UpdateTurma (sucesso)', () => {
    return expect(TurmaController.updateTurma({codigo: '1111', id_periodo: 2, id_professor: 1, id_disciplina: 3})).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateTurma (erro 1)', () => {
    return expect(TurmaController.updateTurma({codigo: '1111', id_periodo: 2})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('UpdateTurma (erro 2)', () => {
    return expect(TurmaController.updateTurma({codigo: null, id_periodo: null, id_professor: null, id_disciplina: null})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('UpdateTurma (erro 3)', () => {
    return expect(TurmaController.updateTurma({codigo: null, id_periodo: 1, id_professor: null, id_disciplina: null})).rejects.toThrow("Erro: informe todos os campos do objeto Turma");
});

test('UpdateTurma (erro 4)', () => {
    return expect(TurmaController.updateTurma({codigo: '123', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('UpdateTurma (erro 5)', () => {
    return expect(TurmaController.updateTurma({codigo: '12345', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('UpdateTurma (erro 6)', () => {
    return expect(TurmaController.updateTurma({codigo: 'abc', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('UpdateTurma (erro 7)', () => {
    return expect(TurmaController.updateTurma({codigo: 'abcd', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('UpdateTurma (erro 8)', () => {
    return expect(TurmaController.updateTurma({codigo: 'abcde', id_periodo: 2, id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: O código deve conter exatamente 4 caracteres numéricos");
});

test('UpdateTurma (erro 9)', () => {
    return expect(TurmaController.updateTurma({codigo: '1111', id_periodo: -2, id_professor: -1, id_disciplina: 3})).rejects.toThrow("Erro: Os IDs devem conter somente números");
});

test('UpdateTurma (erro 10)', () => {
    return expect(TurmaController.updateTurma({codigo: '1111', id_periodo: 'abc', id_professor: 1, id_disciplina: 3})).rejects.toThrow("Erro: Os IDs devem conter somente números");
});

test('DeleteTurma (sucesso)', () => {
    return expect(TurmaController.deleteTurma('1111')).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteTurma (erro 1)', () => {
    return expect(TurmaController.deleteTurma('abc')).rejects.toThrow("Falha ao remover turma/turma não encontrada");
});

test('DeleteTurma (erro 2)', () => {
    return expect(TurmaController.deleteTurma('123')).rejects.toThrow("Falha ao remover turma/turma não encontrada");
});

test('DeleteTurma (erro 3)', () => {
    return expect(TurmaController.deleteTurma('12345')).rejects.toThrow("Falha ao remover turma/turma não encontrada");
});

test('DeleteTurma (erro 4)', () => {
    return expect(TurmaController.deleteTurma(null)).rejects.toThrow("Falha ao remover turma/turma não encontrada");
});