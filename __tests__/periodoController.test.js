const PeriodoController = require('../controllers/periodoController');
const conexao = require('../DB/conexao.js');

test('GetPeriodo (sucesso)', () => {
    return expect(PeriodoController.getPeriodo(1)).resolves.toEqual([{ativo: 1, id: 1, ano: 2020, semestre: 1}]);
});

test('GetPeriodo (erro 1)', () => {
    return expect(PeriodoController.getPeriodo(95)).rejects.toThrow("Nenhum periodo com este id encontrado");
});

test('GetPeriodo (erro 2)', () => {
    return expect(PeriodoController.getPeriodo('abc')).rejects.toThrow("Nenhum periodo com este id encontrado");
});

test('GetPeriodo (erro 3)', () => {
    return expect(PeriodoController.getPeriodo(null)).rejects.toThrow("Nenhum periodo com este id encontrado");
});

test('GetTodosPeriodos (sucesso)', () => {
    return expect(PeriodoController.getTodosPeriodos()).resolves.toEqual([{ativo: 1, id: 1, ano: 2020, semestre: 1},{ativo: 1, id: 2, ano: 2020, semestre: 2},{ativo: 1, id: 3, ano: 2021, semestre: 1}]);
});

test('CreatePeriodo (sucesso)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 2017, 'semestre': 2})).resolves.toHaveProperty('affectedRows', 1);
});

test('CreatePeriodo (erro 1)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 2017})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 2)', () => {
    return expect(PeriodoController.createPeriodo({'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 3)', () => {
    return expect(PeriodoController.createPeriodo(null)).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 4)', () => {
    return expect(PeriodoController.createPeriodo({'ano': null, 'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 5)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 2017, 'semestre': null})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 6)', () => {
    return expect(PeriodoController.createPeriodo({'ano': null, 'semestre': null})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('CreatePeriodo (erro 7)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 'abc', 'semestre': 2})).rejects.toThrow("Erro: O ano deve conter exatamente 4 caracteres numéricos");
});

test('CreatePeriodo (erro 8)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 2017, 'semestre': 25})).rejects.toThrow("Erro: O semestre deve conter exatamente 1 caractere numérico");
});

test('CreatePeriodo (erro 9)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 20170, 'semestre': 2})).rejects.toThrow("Erro: O ano deve conter exatamente 4 caracteres numéricos");
});

test('CreatePeriodo (erro 10)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 'abcd3rd', 'semestre': 'fadadgf'})).rejects.toThrow("O ano deve conter exatamente 4 caracteres numéricos");
});

test('CreatePeriodo (erro 11)', () => {
    return expect(PeriodoController.createPeriodo({'ano': 2017, 'semestre': 'abc'})).rejects.toThrow("Erro: O semestre deve conter exatamente 1 caractere numérico");
});

/* O teste do Update de sucesso é realizado usando o ID que foi usado no Create */
test('UpdatePeriodo (sucesso)', () => {
    const p = new Promise(function(resolve, reject) {
        conexao.query('SELECT MAX(id) AS mid FROM periodo WHERE ativo = true', function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });

    p.then((result) => {
        return expect(PeriodoController.updatePeriodo({'id': result[0].mid, 'ano': 2017, 'semestre': 3})).resolves.toHaveProperty('affectedRows', 1);
    });
});

test('UpdatePeriodo (erro 1)', () => {
    return expect(PeriodoController.updatePeriodo({'ano': 2017})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 2)', () => {
    return expect(PeriodoController.updatePeriodo({'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 2)', () => {
    return expect(PeriodoController.updatePeriodo({'ano': 2017, 'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 3)', () => {
    return expect(PeriodoController.updatePeriodo(null)).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 4)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 'ab', 'ano': 2007, 'semestre': 2})).rejects.toThrow("Erro: O valor do ID deve ser numérico");
});

test('UpdatePeriodo (erro 5)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'matricula': null, 'nome': null})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 6)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': 2017, 'semestre': null})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 7)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': null, 'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 7)', () => {
    return expect(PeriodoController.updatePeriodo({'id': null, 'ano': 2017, 'semestre': 2})).rejects.toThrow("Erro: informe todos os campos do objeto Periodo");
});

test('UpdatePeriodo (erro 8)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': 20070, 'semestre': 1})).rejects.toThrow("Erro: O ano deve conter exatamente 4 caracteres numéricos");
});

test('UpdatePeriodo (erro 9)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': '123', 'semestre': '2'})).rejects.toThrow("Erro: O ano deve conter exatamente 4 caracteres numéricos");
});

test('UpdatePeriodo (erro 10)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': 'abcd', 'semestre': 2})).rejects.toThrow("Erro: O ano deve conter exatamente 4 caracteres numéricos");
});

test('UpdatePeriodo (erro 11)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': '2014', 'semestre': 27})).rejects.toThrow("Erro: O semestre deve conter exatamente 1 caractere numérico");
});

test('UpdatePeriodo (erro 12)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': '2014', 'semestre': '-4'})).rejects.toThrow("Erro: O semestre deve conter exatamente 1 caractere numérico");
});

test('UpdatePeriodo (erro 13)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 1, 'ano': '2014', 'semestre': 'abc'})).rejects.toThrow("Erro: O semestre deve conter exatamente 1 caractere numérico");
});

test('UpdatePeriodo (erro 14)', () => {
    return expect(PeriodoController.updatePeriodo({'id': 'abc', 'ano': '2014', 'semestre': '1'})).rejects.toThrow("Erro: O valor do ID deve ser numérico");
});

/* O teste do Delete de sucesso é realizado usando o ID que foi usado no Create */
test('DeletePeriodo (sucesso)', () => {
    const p = new Promise(function(resolve, reject) {
        conexao.query('SELECT MAX(id) AS mid FROM periodo WHERE ativo = true', function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });

    p.then((result) => {
        return expect(PeriodoController.deletePeriodo(result[0].mid)).resolves.toHaveProperty('affectedRows', 1);
    });
});

test('DeletePeriodo (erro 1)', () => {
    return expect(PeriodoController.deletePeriodo('abc')).rejects.toThrow("Falha ao remover periodo/periodo não encontrado");
});

test('DeletePeriodo (erro 2)', () => {
    return expect(PeriodoController.deletePeriodo(-1)).rejects.toThrow("Falha ao remover periodo/periodo não encontrado");
});

test('DeletePeriodo (erro 3)', () => {
    return expect(PeriodoController.deletePeriodo(null)).rejects.toThrow("Falha ao remover periodo/periodo não encontrado");
});