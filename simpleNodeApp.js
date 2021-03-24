const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
const app = express()


const controllerAluno = require('./controllers/alunoController');


app.put('/', function (req, res) {

//exemplo de comportamento assíncrono

  console.log("POSIÇÃO 0");

  new Promise((resolve, reject) => {

    console.log("POSIÇÃO 1");
    resolve();

  }).then(() => {

   //assíncrono
    // comportamento que depende do comportamento da promise

  });

  console.log("POSIÇÃO 3")
  console.log("POSIÇÃO 4")
  console.log("POSIÇÃO 5")
  console.log("POSIÇÃO 6")

  res.send('Resposta a requisição PUT');

});

//Rotas de aluno. Pode ser colocado em um arquivo a parte (alunoRoutes.js)

app.get('/aluno/:id', function (req, res) {
    
  let matricula = req.params.id;
  console.log("recebida requisição get para aluno com matrícula: "+matricula);

  let matriculaAlunoSelecionado = "";

  controllerAluno.getAluno(matricula)
    .then(resultado => {
        res.send(JSON.stringify(resultado))
      })
    .catch(erro => {
      console.log("Promise rejeitada: " + erro);
      res.send(erro);
    })
  

});


app.get('/aluno/', function (req, res) {
  
  console.log("recebida requisição get todos alunos ");
  controllerAluno.getTodosAlunos()
  .then(resultado => {
    res.send(resultado)
    })
  .catch(erro => {
    console.log("Promise rejeitada (aluno): " + erro);
    res.send(erro);
  })
  

});


app.post('/', function (req, res) {
  res.send('Got a POST request');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});