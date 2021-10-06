const AlunoController = require('../controllers/alunoController');

jest.mock('../models/aluno.js');

test('GetCR (sucesso)', () => {
    return AlunoController.getCR('183752').then(resultado => {
        let cr = resultado.cr;
        expect(parseFloat(cr.toFixed(2))).toEqual(5.2);
        expect(cr).toBeGreaterThanOrEqual(0);
        expect(cr).toBeLessThanOrEqual(10);
    });
});

test('GetCRPeriodo (sucesso)', () => {
    return AlunoController.getCRPeriodo('183752', 2020, 2).then(resultado => {
        let cr = resultado.cr;
        expect(parseFloat(cr.toFixed(2))).toEqual(5.2);
        expect(cr).toBeGreaterThanOrEqual(0);
        expect(cr).toBeLessThanOrEqual(10);
    });
});

test('GetSituacao (sucesso 1)', () => {
    return AlunoController.getSituacao('183752', 9269).then(resultado => {
        expect(parseFloat(resultado.media.toFixed(2))).toEqual(5.2);
        expect(resultado.situacao).toMatch("Aprovado");
        expect(resultado.media).toBeGreaterThanOrEqual(0);
        expect(resultado.media).toBeLessThanOrEqual(10);
    });
});

test('GetSituacao (sucesso 2)', () => {
    return AlunoController.getSituacao('183752', 9269).then(resultado => {
        expect(parseFloat(resultado.media.toFixed(2))).toEqual(5.2);
        expect(resultado.situacao).not.toMatch("Reprovado");
        expect(resultado.media).toBeGreaterThanOrEqual(0);
        expect(resultado.media).toBeLessThanOrEqual(10);
    });
});

test('GetAluno (sucesso)', () => {
    return expect(AlunoController.getAluno('490081')).resolves.toEqual([{matricula: '490081', nome: 'Norry Smeeton'}]);
});

test('GetTodosAlunos (sucesso)', () => {
    return expect(AlunoController.getTodosAlunos()).resolves.toEqual([{nome: 'Brendin Witul', matricula: '257389'},{nome: 'Arlyn Lidgate', matricula: '598444'},{nome: 'Janie Wornum', matricula: '300427'},{nome: 'Pamelina Giovannilli', matricula: '611276'},{nome: 'Alfy Craister', matricula: '508010'},{nome: 'Quintina Ramelot', matricula: '707824'},{nome: 'Arlana Crowth', matricula: '924847'},{nome: 'Mar Bransdon', matricula: '880829'},{nome: 'Kathlin Steed', matricula: '428208'},{nome: 'Harbert Leahy', matricula: '816002'},{nome: 'Lezlie Vreiberg', matricula: '607744'},{nome: 'Norry Smeeton', matricula: '490081'},{nome: 'Marjory Kurtis', matricula: '962555'},{nome: 'Temple Hadlee', matricula: '326806'},{nome: 'Mickey Behr', matricula: '132461'},{nome: 'Bette-ann Hadye', matricula: '285769'},{nome: 'Hermie Donavan', matricula: '393463'},{nome: 'Sallyann Killingworth', matricula: '183752'},{nome: 'Tanney Acaster', matricula: '686199'},{nome: 'Valentia Tomson', matricula: '736945'}]);
});

test('CreateAluno (sucesso)', () => {
    return expect(AlunoController.createAluno({'matricula': '000000', 'nome': 'Fulano Ciclano'})).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateAluno (sucesso)', () => {
    return expect(AlunoController.updateAluno({'matricula': '000000', 'nome': 'Beltrano'})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteAluno (sucesso)', () => {
    return expect(AlunoController.deleteAluno('000000')).resolves.toHaveProperty('affectedRows', 1);
});

test('GetCR (erro 1)', () => {
    return expect(AlunoController.getCR(null)).rejects.toThrow("Informe uma matrícula de formato válido");
});

test('GetCR (erro 2)', () => {
    return expect(AlunoController.getCR('abcd')).rejects.toThrow("Informe uma matrícula de formato válido");
});

test('GetCR (erro 3)', () => {
    return expect(AlunoController.getCR('12345')).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetCR (erro 4)', () => {
    return expect(AlunoController.getCR('1234567')).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetCRPeriodo (erro 1)', () => {
    return expect(AlunoController.getCRPeriodo(null)).rejects.toThrow("A matrícula, o ano e o semestre são campos numéricos obrigatórios.");
});

test('GetCRPeriodo (erro 2)', () => {
    return expect(AlunoController.getCRPeriodo(null, 2020, 2)).rejects.toThrow("A matrícula, o ano e o semestre são campos numéricos obrigatórios.");
});

test('GetCRPeriodo (erro 3)', () => {
    return expect(AlunoController.getCRPeriodo('183752', 'abc', 2)).rejects.toThrow("A matrícula, o ano e o semestre são campos numéricos obrigatórios");
});

test('GetCRPeriodo (erro 4)', () => {
    return expect(AlunoController.getCRPeriodo('12345', 2020, 2)).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetCRPeriodo (erro 5)', () => {
    return expect(AlunoController.getCRPeriodo('1234567', 2020, 2)).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetCRPeriodo (erro 6)', () => {
    return expect(AlunoController.getCRPeriodo('123456', 202, 2)).rejects.toThrow("O ano precisa ser composto por exatamento 4 caracteres numéricos.");
});

test('GetCRPeriodo (erro 7)', () => {
    return expect(AlunoController.getCRPeriodo('123456', 20222, 2)).rejects.toThrow("O ano precisa ser composto por exatamento 4 caracteres numéricos.");
});

test('GetCRPeriodo (erro 8)', () => {
    return expect(AlunoController.getCRPeriodo('123456', 2022, 23)).rejects.toThrow("O semestre precisa ser composto por exatamento 1 caractere numérico.");
});

test('GetCRPeriodo (erro 9)', () => {
    return expect(AlunoController.getCRPeriodo('123456', 2022, -1)).rejects.toThrow("O semestre precisa ser composto por exatamento 1 caractere numérico.");
});

test('GetSituacao (erro 1)', () => {
    return expect(AlunoController.getSituacao(null, 2022)).rejects.toThrow("A matrícula e o código são campos numéricos obrigatórios.");
});

test('GetSituacao (erro 2)', () => {
    return expect(AlunoController.getSituacao('111111', null)).rejects.toThrow("A matrícula e o código são campos numéricos obrigatórios.");
});

test('GetSituacao (erro 3)', () => {
    return expect(AlunoController.getSituacao('abc', 2020)).rejects.toThrow("A matrícula e o código são campos numéricos obrigatórios.");
});

test('GetSituacao (erro 4)', () => {
    return expect(AlunoController.getSituacao('111111', "abcd")).rejects.toThrow("A matrícula e o código são campos numéricos obrigatórios.");
});

test('GetSituacao (erro 5)', () => {
    return expect(AlunoController.getSituacao('12345', 2020)).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetSituacao (erro 6)', () => {
    return expect(AlunoController.getSituacao('1234567', 2020)).rejects.toThrow("A matrícula precisa ser composta por exatamente 6 caracteres numéricos.");
});

test('GetSituacao (erro 7)', () => {
    return expect(AlunoController.getSituacao('123456', 20222)).rejects.toThrow("O código precisa ser composto por exatamente 4 caracteres numéricos.");
});

test('GetSituacao (erro 8)', () => {
    return expect(AlunoController.getSituacao('123456', 202)).rejects.toThrow("O código precisa ser composto por exatamente 4 caracteres numéricos.");
});

test('GetAluno (erro 1)', () => {
    return expect(AlunoController.getAluno('abcdfe')).rejects.toThrow("Nenhum aluno com esta matrícula encontrado");
});

test('GetAluno (erro 2)', () => {
    return expect(AlunoController.getAluno(null)).rejects.toThrow("Nenhum aluno com esta matrícula encontrado");
});

test('GetAluno (erro 3)', () => {
    return expect(AlunoController.getAluno('12345')).rejects.toThrow("Nenhum aluno com esta matrícula encontrado");
});

test('GetAluno (erro 4)', () => {
    return expect(AlunoController.getAluno('1234567')).rejects.toThrow("Nenhum aluno com esta matrícula encontrado");
});

test('CreateAluno (erro 1)', () => {
    return expect(AlunoController.createAluno({'matricula': '000001'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 2)', () => {
    return expect(AlunoController.createAluno({'nome': 'Fulano Ciclano'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 3)', () => {
    return expect(AlunoController.createAluno(null)).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 4)', () => {
    return expect(AlunoController.createAluno({'matricula': null, 'nome': 'Fulano Ciclano'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 5)', () => {
    return expect(AlunoController.createAluno({'matricula': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 6)', () => {
    return expect(AlunoController.createAluno({'matricula': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('CreateAluno (erro 7)', () => {
    return expect(AlunoController.createAluno({'matricula': 1, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateAluno (erro 8)', () => {
    return expect(AlunoController.createAluno({'matricula': '1234567', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateAluno (erro 9)', () => {
    return expect(AlunoController.createAluno({'matricula': '1a3b45', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('CreateAluno (erro 10)', () => {
    return expect(AlunoController.createAluno({'matricula': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('CreateAluno (erro 11)', () => {
    return expect(AlunoController.createAluno({'matricula': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateAluno (erro 1)', () => {
    return expect(AlunoController.updateAluno({'matricula': '000000'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 2)', () => {
    return expect(AlunoController.updateAluno({'nome': 'Beltrano'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 3)', () => {
    return expect(AlunoController.updateAluno(null)).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 4)', () => {
    return expect(AlunoController.updateAluno({'matricula': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 5)', () => {
    return expect(AlunoController.updateAluno({'matricula': '000000', 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 6)', () => {
    return expect(AlunoController.updateAluno({'matricula': null, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: informe todos os campos do objeto Aluno");
});

test('UpdateAluno (erro 7)', () => {
    return expect(AlunoController.updateAluno({'matricula': 1, 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateAluno (erro 8)', () => {
    return expect(AlunoController.updateAluno({'matricula': '1234567', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateAluno (erro 9)', () => {
    return expect(AlunoController.updateAluno({'matricula': '1a3b45', 'nome': 'Pepino, o Breve'})).rejects.toThrow("Erro: A matrícula deve conter exatamente 6 caracteres numéricos");
});

test('UpdateAluno (erro 10)', () => {
    return expect(AlunoController.updateAluno({'matricula': '123456', 'nome': '              '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('UpdateAluno (erro 11)', () => {
    return expect(AlunoController.updateAluno({'matricula': '123456', 'nome': '7       1       '})).rejects.toThrow("Erro: Informe um nome válido");
});

test('DeleteAluno (erro 1)', () => {
    return expect(AlunoController.deleteAluno(1)).rejects.toThrow("Falha ao remover aluno/aluno não encontrado");
});

test('DeleteAluno (erro 2)', () => {
    return expect(AlunoController.deleteAluno(-1)).rejects.toThrow("Falha ao remover aluno/aluno não encontrado");
});

test('DeleteAluno (erro 3)', () => {
    return expect(AlunoController.deleteAluno(null)).rejects.toThrow("Falha ao remover aluno/aluno não encontrado");
});