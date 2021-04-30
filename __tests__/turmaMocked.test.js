const turma = require('../models/turma.js');

jest.mock('../models/turma.js');

test('GetTurma()', () => {
    return expect(turma.getTurmaBD('3617')).resolves.toEqual([{codigo: '3617', id_periodo: 2, id_professor: 1, id_disciplina: 4}]);
});

test('CreateTurma()', () => {
    return expect(turma.createTurmaBD({codigo: '3618', id_periodo: 3, id_professor: 2, id_disciplina: 5})).resolves.toHaveProperty('affectedRows', 1);
});

test('DeleteTurma()', () => {
    return expect(turma.deleteTurmaBD('3617')).resolves.toHaveProperty('affectedRows', 1);
});

test('UpdateTurma()', () => {
    return expect(turma.updateTurmaBD({codigo: '3618', id_periodo: 3, id_professor: 2, id_disciplina: 5})).resolves.toHaveProperty('affectedRows', 1);
});

test('GetMediaTurma()', () => {
    return expect(turma.getMediaTurma('7287')).resolves.toEqual([{peso: 2, nota: 7.51},{peso: 5, nota: 1.85},{peso: 1, nota: 5.72},{peso: 1, nota: 2.38},{peso: 1, nota: 8.82},{peso: 5, nota: 5.84},{peso: 1, nota: 5.11},{peso: 5, nota: 3.03},{peso: 4, nota: 4.15},{peso: 5, nota: 9.02},{peso: 1, nota: 9.59},{peso: 4, nota: 7.69},{peso: 1, nota: 2.54},{peso: 1, nota: 6.28},{peso: 2, nota: 6.96},{peso: 1, nota: 4.73},{peso: 3, nota: 5.75},{peso: 3, nota: 2.51},{peso: 1, nota: 2.50},{peso: 4, nota: 9.37},{peso: 1, nota: 9.91},{peso: 1, nota: 2.16},{peso: 3, nota: 8.56},{peso: 5, nota: 1.59},{peso: 5, nota: 6.97},{peso: 5, nota: 2.07},{peso: 2, nota: 6.40},{peso: 3, nota: 3.52},{peso: 2, nota: 8.86},{peso: 3, nota: 1.98},{peso: 3, nota: 4.84},{peso: 2, nota: 1.69},{peso: 5, nota: 7.64},{peso: 4, nota: 2.07},{peso: 5, nota: 8.99},{peso: 4, nota: 3.51},{peso: 1, nota: 7.92},{peso: 3, nota: 6.84},{peso: 1, nota: 9.36},{peso: 3, nota: 4.33},{peso: 5, nota: 5.48},{peso: 3, nota: 4.49},{peso: 5, nota: 8.65},{peso: 4, nota: 9.36},{peso: 1, nota: 1.14},{peso: 3, nota: 1.44},{peso: 4, nota: 1.52},{peso: 4, nota: 8.40},{peso: 4, nota: 6.94},{peso: 3, nota: 1.29},{peso: 2, nota: 5.18},{peso: 2, nota: 9.13},{peso: 5, nota: 5.89},{peso: 1, nota: 8.65},{peso: 5, nota: 5.66},{peso: 3, nota: 8.00},{peso: 4, nota: 4.96}]);
});

test('GetTodasTurmas()', () => {
    return expect(turma.getTodasTurmasBD()).resolves.toEqual([{codigo: '7287', id_periodo: 2, id_professor: 2, id_disciplina: 2}, {codigo: '6726', id_periodo: 3, id_professor: 1, id_disciplina: 5}, {codigo: '3617', id_periodo: 2, id_professor: 1, id_disciplina: 4}, {codigo: '9269', id_periodo: 1, id_professor: 2, id_disciplina: 2}, {codigo: '9496', id_periodo: 2, id_professor: 1, id_disciplina: 5}]);
});

