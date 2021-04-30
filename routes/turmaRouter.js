const express = require('express')

const turma = express.Router({mergeParams: true})

// Parser JSON para o body
turma.use(express.json());
turma.use(express.urlencoded({ extended: true }));

const controllerTurma = require('../controllers/turmaController');

turma.get('/turma/:id', function (req, res) {
    
    let codigo = req.params.id;
    console.log("recebida requisição get para turma com codigo: "+codigo);
  
    controllerTurma.getTurma(codigo)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
    
  
  });

turma.get('/turma/media/:id', function(req, res) {
  let codigo = req.params.id;
    
  console.log("recebida requisição get para média da turma com código: " +  codigo);
  
  controllerTurma.getMedia(codigo)
      .then(resultado => {
        res.send(resultado)
      })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
});
  
  turma
    .get('/turma/', function (req, res) {
      console.log("recebida requisição get todas turmas ");
      controllerTurma.getTodasTurmas()
      .then(resultado => {
          res.send(resultado)
      })
      .catch(erro => {
          console.log("Promise rejeitada (turma): " + erro);
          res.send(erro);
      })

    })
    
    .post('/turma', function (req, res) {
      console.log("recebida requisição create turma");
      controllerTurma.createTurma(req.body)
      .then(resultado => {
        res.send("Turma inserida com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })

    .delete('/turma', function (req, res) {
      console.log("recebida requisição delete turma :ID="+req.body.codigo);
      controllerTurma.deleteTurma(req.body.codigo)
      .then(resultado => {
        res.send("Turma removido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })  
  
    .patch('/turma', function (req, res) {
      console.log("recebida requisição alterar turma");
      controllerTurma.updateTurma(req.body)
      .then(resultado => {
        res.send("Turma atualizado com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    });  

module.exports = turma
