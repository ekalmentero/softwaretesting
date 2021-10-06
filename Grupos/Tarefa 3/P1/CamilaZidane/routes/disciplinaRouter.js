const express = require('express')

const disciplina = express.Router({mergeParams: true})

// Parser JSON para o body
disciplina.use(express.json());
disciplina.use(express.urlencoded({ extended: true }));

const controllerDisciplina = require('../controllers/disciplinaController');

disciplina.get('/disciplina/:codigo', function (req, res) {
    
    let codigo = req.params.codigo;
    console.log("recebida requisição get para disciplina com código: "+codigo);
  
    controllerDisciplina.getDisciplina(codigo)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
    
  
  });
  
  disciplina
    .get('/disciplina/', function (req, res) {
      console.log("recebida requisição get todos disciplinas ");
      controllerDisciplina.getTodosDisciplinas()
      .then(resultado => {
          res.send(resultado)
      })
      .catch(erro => {
          console.log("Promise rejeitada (disciplina): " + erro);
          res.send(erro);
      })

    })
    
    .post('/disciplina', function (req, res) {
      console.log("recebida requisição create disciplina");
      controllerDisciplina.createDisciplina(req.body)
      .then(resultado => {
        res.send("Disciplina inserido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })

    .delete('/disciplina', function (req, res) {
      console.log("recebida requisição delete disciplina :ID="+req.body.codigo);
      controllerDisciplina.deleteDisciplina(req.body.codigo)
      .then(resultado => {
        res.send("Disciplina removido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })  
  
    .patch('/disciplina', function (req, res) {
      console.log("recebida requisição alterar disciplina");
      controllerDisciplina.updateDisciplina(req.body)
      .then(resultado => {
        res.send("Disciplina atualizado com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    });  
    



    
  

  module.exports = disciplina