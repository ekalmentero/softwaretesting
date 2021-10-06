const express = require('express')

const aluno = express.Router({mergeParams: true})

// Parser JSON para o body
aluno.use(express.json());
aluno.use(express.urlencoded({ extended: true }));

const controllerAluno = require('../controllers/alunoController');

aluno.get('/aluno/:id', function (req, res) {
    
    let matricula = req.params.id;
    console.log("recebida requisição get para aluno com matrícula: "+matricula);
  
    controllerAluno.getAluno(matricula)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
    
  
  });

aluno.get('/aluno/cr/:id', function(req, res) {
  let matricula = req.params.id;
  
  console.log("recebida requisição get para CR de aluno com matrícula: "+matricula);

  controllerAluno.getCR(matricula)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
});

aluno.get('/aluno/cr/:id/:ano/:semestre', function(req, res) {
  let matricula = req.params.id;
  let ano = req.params.ano;
  let semestre = req.params.semestre;
  
  console.log("recebida requisição get para CR (" + ano + "." + semestre + ") de aluno com matrícula: "+matricula);

  controllerAluno.getCRPeriodo(matricula, ano, semestre)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
});

aluno.get('/aluno/situacao/:id/:codigo', function(req, res) {
  let matricula = req.params.id;
  let codigo = req.params.codigo;
  
  console.log("recebida requisição get para situação (turma de código " + codigo + ") de aluno com matrícula: "+matricula);

  controllerAluno.getSituacao(matricula, codigo)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
});
  
  aluno
    .get('/aluno/', function (req, res) {
      console.log("recebida requisição get todos alunos ");
      controllerAluno.getTodosAlunos()
      .then(resultado => {
          res.send(resultado)
      })
      .catch(erro => {
          console.log("Promise rejeitada (aluno): " + erro);
          res.send(erro);
      })

    })
    
    .post('/aluno', function (req, res) {
      console.log("recebida requisição create aluno");
      controllerAluno.createAluno(req.body)
      .then(resultado => {
        res.send("Aluno inserido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })

    .delete('/aluno', function (req, res) {
      console.log("recebida requisição delete aluno :ID="+req.body.matricula);
      controllerAluno.deleteAluno(req.body.matricula)
      .then(resultado => {
        res.send("Aluno removido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })  
  
    .patch('/aluno', function (req, res) {
      console.log("recebida requisição alterar aluno");
      controllerAluno.updateAluno(req.body)
      .then(resultado => {
        res.send("Aluno atualizado com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    });  
    



    
  

  module.exports = aluno
