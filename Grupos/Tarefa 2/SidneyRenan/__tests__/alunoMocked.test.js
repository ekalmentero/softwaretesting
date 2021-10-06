//mocked test
const fs = require('fs');
const path = require("path");
const alunoModel = require('../models/aluno.js');
const alunosTodos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../models/alunos.json")));

jest.mock('../models/aluno.js');

test('Teste de get Aluno do Mock', () => {
    expect(alunoModel.getAluno(684958)).toEqual({matricula: 684958, nome: 'Lanita'});
});

test('Teste de get Aluno do Mock', () => {
    expect(alunoModel.getTodos()).toEqual(alunosTodos);
});