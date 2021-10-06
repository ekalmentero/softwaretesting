const fs = require('fs');
const path = require("path");
const alunoModel = require('../models/aluno.js');
const alunosTodosBD = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../models/alunosBD.json")));
require('iconv-lite').encodingExists('foo');

test('Teste de get Aluno do Banco de dados', () => {
    return alunoModel.getAluno(701677).then( data => {
        expect(data).toEqual({matricula: 701677, nome: 'Abba'});
    })
});

test('Teste de get Todos do Banco de dados', () => {
  return alunoModel.getTodos().then(data => {
    expect(data).toEqual(alunosTodosBD);
  })
});