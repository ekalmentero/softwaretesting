const express = require('express')

const periodo = express.Router({mergeParams: true})

// Parser JSON para o body
periodo.use(express.json());
periodo.use(express.urlencoded({ extended: true }));

const controllerPeriodo = require('../controllers/periodoController');

periodo.get('/periodo/:id', function (req, res) {
    
    let semestre = req.params.id;
    console.log("recebida requisição get para periodo do semestre: "+semestre);
  
    controllerPeriodo.getPeriodo(semestre)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
    
  
  });
  
  periodo
    .get('/periodo/', function (req, res) {
      console.log("recebida requisição get todos períodos ");
      controllerPeriodo.getTodosPeriodos()
      .then(resultado => {
          res.send(resultado)
      })
      .catch(erro => {
          console.log("Promise rejeitada (periodo): " + erro);
          res.send(erro);
      })

    })
    
    .post('/periodo', function (req, res) {
      console.log("recebida requisição create periodo");
      controllerPeriodo.createPeriodo(req.body)
      .then(resultado => {
        res.send("Periodo inserido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })

    .delete('/periodo', function (req, res) {
      console.log("recebida requisição delete periodo :ID="+req.body.id);
      controllerPeriodo.deletePeriodo(req.body.id)
      .then(resultado => {
        res.send("Periodo removido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })  
  
    .patch('/periodo', function (req, res) {
      console.log("recebida requisição alterar periodo");
      controllerPeriodo.updatePeriodo(req.body)
      .then(resultado => {
        res.send("Periodo atualizado com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    });  
    



    
  

  module.exports = periodo