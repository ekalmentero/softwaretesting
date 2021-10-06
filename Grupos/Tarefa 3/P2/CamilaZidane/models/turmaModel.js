// turma.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodosTurmasBD () {
  return new Promise(function (resolve, reject) {
    conexao.query('SELECT * FROM turma', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

// Recuperar dados de turma
function getTurmaBD (codigo) {
  return new Promise(function (resolve, reject) {
    conexao.query('SELECT * FROM turma WHERE codigo =' + codigo, function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function createTurmaBD (turma) {
  return new Promise(function (resolve, reject) {
    conexao.query('INSERT INTO turma (codigo, disciplina, professor, periodo) VALUES ("' + turma.codigo + '","' + turma.disciplina + '","' + turma.professor + '","' + turma.periodo + '")', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function deleteTurmaBD (codigo) {
  return new Promise(function (resolve, reject) {
    conexao.query('DELETE from turma WHERE codigo=("' + codigo + '")', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function updateTurmaBD (turma) {
  return new Promise(function (resolve, reject) {
    conexao.query('UPDATE turma SET disciplina = "' + turma.disciplina + '", professor = "' + turma.professor + '", periodo = "' + turma.periodo + '"  WHERE codigo = "' + turma.codigo + '"', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

module.exports = {
  getTodosTurmasBD,
  getTurmaBD,
  createTurmaBD,
  deleteTurmaBD,
updateTurmaBD}
