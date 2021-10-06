const express = require('express')

const avaliacao = express.Router({mergeParams: true})

// Parser JSON para o body
avaliacao.use(express.json())
avaliacao.use(express.urlencoded({ extended: true }))

const controllerAvaliacao = require('../controllers/avaliacaoController')

disciplina.get('/avaliacao/:id', function (req, res) {
  let id = req.params.id
  console.log('recebida requisição get para avaliacao com código: ' + id)

  controllerAvaliacao.getAvaliacao(id)
    .then(resultado => {
      res.send(resultado)
    })
    .catch(erro => {
      console.log('Promise rejeitada: ' + erro)
      res.send(erro)
    })
})

avaliacao
  .get('/avaliacao/', function (req, res) {
    console.log('recebida requisição get todas avaliacaos ')
    controllerAvaliacao.getTodosAvaliacaos()
      .then(resultado => {
        res.send(resultado)
      })
      .catch(erro => {
        console.log('Promise rejeitada (avaliacaos): ' + erro)
        res.send(erro)
      })
  })

  .post('/avaliacao', function (req, res) {
    console.log('recebida requisição create avaliacao')
    controllerAvaliacao.createAvaliacao(req.body)
      .then(resultado => {
        res.send('avaliacao inserida com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

  .delete('/avaliacao', function (req, res) {
    console.log('recebida requisição delete avaliacao :ID=' + req.body.id)
    controllerAvaliacao.deleteAvaliacao(req.body.id)
      .then(resultado => {
        res.send('avaliacao removida com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

  .patch('/avaliacao', function (req, res) {
    console.log('recebida requisição alterar avaliacao')
    controllerAvaliacao.updateAvaliacao(req.body)
      .then(resultado => {
        res.send('avaliacao atualizado com sucesso')
      })
      .catch(erro => {
        console.log(erro)
        res.send(erro)
      })
  })

module.exports = avaliacao
