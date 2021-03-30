const express = require('express')

const professor = express.Router({mergeParams: true})

//const controllerAluno = require('../controllers/alunoController');

professor.get('/professor/:id', function (req, res) {
    
    res.send('recebida requisição get professor');
  
 });
  
professor
.get('/professor/', function (req, res) {
    res.send('recebida requisição get professor');
})
.post('/professor', function (req, res) {
    res.send('recebida requisição post professor');
});

    
  

  module.exports = professor