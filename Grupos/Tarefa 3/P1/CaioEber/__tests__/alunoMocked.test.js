const aluno = require('../models/aluno.js');

jest.mock('../models/aluno.js');

test('GetTodosAlunos()', () => {
    return expect(aluno.getTodosAlunosBD()).resolves.toEqual([{nome: 'Brendin Witul', matricula: '257389'}, {nome: 'Arlyn Lidgate', matricula: '598444'}, {nome: 'Janie Wornum', matricula: '300427'}, {nome: 'Pamelina Giovannilli', matricula: '611276'}, {nome: 'Alfy Craister', matricula: '508010'}, {nome: 'Quintina Ramelot', matricula: '707824'}, {nome: 'Arlana Crowth', matricula: '924847'}, {nome: 'Mar Bransdon', matricula: '880829'}, {nome: 'Kathlin Steed', matricula: '428208'}, {nome: 'Harbert Leahy', matricula: '816002'}, {nome: 'Lezlie Vreiberg', matricula: '607744'}, {nome: 'Norry Smeeton', matricula: '490081'}, {nome: 'Marjory Kurtis', matricula: '962555'}, {nome: 'Temple Hadlee', matricula: '326806'}, {nome: 'Mickey Behr', matricula: '132461'}, {nome: 'Bette-ann Hadye', matricula: '285769'}, {nome: 'Hermie Donavan', matricula: '393463'}, {nome: 'Sallyann Killingworth', matricula: '183752'}, {nome: 'Tanney Acaster', matricula: '686199'}, {nome: 'Valentia Tomson', matricula: '736945'}]);
});

test('GetAlunoDB()', () => {
    return expect(aluno.getAlunoBD('490081')).resolves.toEqual([{matricula: '490081', nome: 'Norry Smeeton'}]);
});

test('CreateAluno()', () => {
    return expect(aluno.createAlunoBD({nome: 'Brendin Witul', matricula: '257389'})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteAluno()', () => {
    return expect(aluno.deleteAlunoBD('257389')).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateAluno()', () => {
    return expect(aluno.updateAlunoBD({matricula: '490081', nome: 'Chuck Norris Smeeton'})).resolves.toHaveProperty('affectedRows', 1);
});

test('GetAvaliacoesByAluno()', () => {
    return expect(aluno.getAvaliacoesByAluno('257389')).resolves.toEqual([{nota: 10, peso: 2}, {nota: 3, peso: 2}, {nota: 6, peso: 4}, {nota: 1, peso: 2}]);
});

test('GetAvaliacoesByAlunoByPeriodo()', () => {
    return expect(aluno.getAvaliacoesByAlunoByPeriodo('257389', 2021, 2)).resolves.toEqual([{nota: 10, peso: 2}, {nota: 3, peso: 2}, {nota: 6, peso: 4}, {nota: 1, peso: 2}]);
});

test('GetSituacao()', () => {
    return expect(aluno.getSituacao('257389', '2143')).resolves.toEqual([{nota: 10, peso: 2}, {nota: 3, peso: 2}, {nota: 6, peso: 4}, {nota: 1, peso: 2}]);
});