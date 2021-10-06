const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
//const app = express({mergeParams: true})
const app = express()

const aluno = require ('./routes/alunoRouter');
const professor = require ('./routes/professorRouter');
const disciplina = require ('./routes/disciplinaRouter');
const periodo = require ('./routes/periodoRouter');
const turma = require ('./routes/turmaRouter');
const avaliacao = require ('./routes/avaliacaoRouter');

app.use(aluno);
app.use(professor);
app.use(disciplina);
app.use(periodo);
app.use(turma);
app.use(avaliacao);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});