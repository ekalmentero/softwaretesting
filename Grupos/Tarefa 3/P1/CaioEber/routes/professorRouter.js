const express = require('express')

const professor = express.Router({mergeParams: true})

// Parser JSON para o body
professor.use(express.json());
professor.use(express.urlencoded({ extended: true }));

const controllerProfessor = require('../controllers/professorController');

professor.get('/professor/:id', function (req, res) {
    let matricula = req.params.id;
    console.log("recebida requisição get para professor com matrícula: "+matricula);
  
    controllerProfessor.getProfessor(matricula)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })  
});

professor
    .get('/professor/', function (req, res) {
      console.log("recebida requisição get todos professores ");
      controllerProfessor.getTodosProfessores()
      .then(resultado => {
          res.send(resultado)
      })
      .catch(erro => {
          console.log("Promise rejeitada (professor): " + erro);
          res.send(erro);
      })

    })
    
    .post('/professor', function (req, res) {
      console.log("recebida requisição create professor");
      controllerProfessor.createProfessor(req.body)
      .then(resultado => {
        res.send("Professor inserido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })

    .delete('/professor', function (req, res) {
      console.log("recebida requisição delete professor :ID="+req.body.matricula);
      controllerProfessor.deleteProfessor(req.body.matricula)
      .then(resultado => {
        res.send("Professor removido com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    })  
  
    .patch('/professor', function (req, res) {
      console.log("recebida requisição alterar professor");
      controllerProfessor.updateProfessor(req.body)
      .then(resultado => {
        res.send("Professor atualizado com sucesso")
      })
      .catch(erro => {
        console.log(erro);
        res.send(erro);
      })
    });  

    
module.exports = professor
