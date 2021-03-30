const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
//const app = express({mergeParams: true})
const app = express()

const aluno = require ('./routes/alunoRouter');
const professor = require ('./routes/professorRouter');

app.use(aluno);
app.use(professor);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});