const express = require('express')

const turma = express.Router({mergeParams: true})

// Parser JSON para o body
turma.use(express.json())
turma.use(express.urlencoded({ extended: true }))

const controllerTurma = require('../controllers/turmaController')

turma.get('/turma/:codigo', function (req, res) {
  let codigo = req.params.codigo
  console.log('recebida requisição get para turma com código: ' + codigo)

  controllerTurma.getTurma(codigo)
    .then(resultado => {
      res.send(resultado)
    })
    .catch(erro => {
      console.log('Promise rejeitada: ' + erro)
      res.send(erro)
    })
})

turma
  .get('/turma/', function (req, res) {
    console.log('recebida requisição get todas turmas ')
    controllerTurma.getTodosTurmas()
      .then(resultado => {
        res.send(resultado)
      })
      .catch(erro => {
        console.log('Promise rejeitada (turmas): ' + erro)
        res.send(erro)
      })
  })

  .post('/turma', function (req, res) {
    console.log('recebida requisição create turma')
    controllerTurma.createTurma(req.body)
      .then(resultado => {
        res.send('Turma inserida com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

  .delete('/turma', function (req, res) {
    console.log('recebida requisição delete turma :codigo=' + req.body.codigo)
    controllerTurma.deleteTurma(req.body.codigo)
      .then(resultado => {
        res.send('Turma removida com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

  .patch('/turma', function (req, res) {
    console.log('recebida requisição alterar turma')
    controllerTurma.updateTurma(req.body)
      .then(resultado => {
        res.send('Turma atualizado com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

module.exports = turma
