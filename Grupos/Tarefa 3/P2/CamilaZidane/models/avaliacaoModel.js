// avaliacao.js componente da camada de modelo da nossa arquitetura MVC

const conexao = require('../DB/conexao.js')

function getTodosAvaliacaosBD () {
  return new Promise(function (resolve, reject) {
    conexao.query('SELECT * FROM avaliacao', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

// Recuperar dados de avaliacao
function getAvaliacaoBD (id) {
  return new Promise(function (resolve, reject) {
    conexao.query('SELECT * FROM avaliacao WHERE id =' + id, function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function createAvaliacaoBD (avaliacao) {
  return new Promise(function (resolve, reject) {
    conexao.query('INSERT INTO avaliacao (turma, aluno, peso, peso2, nota, nota2) VALUES ("' + avaliacao.turma + '","' + avaliacao.aluno + '","' + avaliacao.peso + '","' + avaliacao.peso2 + '","' + avaliacao.nota + '","' + avaliacao.nota2 + '")', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function deleteAvaliacaoBD (id) {
  return new Promise(function (resolve, reject) {
    conexao.query('DELETE from avaliacao WHERE id=("' + id + '")', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

function updateAvaliacaoBD (avaliacao) {
  return new Promise(function (resolve, reject) {
    conexao.query('UPDATE avaliacao SET aluno = "' + avaliacao.aluno + '", peso = "' + avaliacao.peso + '", peso2 = "' + avaliacao.peso2 + '", nota = "' + avaliacao.nota + '", nota2 = "' + avaliacao.nota2 + '"  WHERE id = "' + avaliacao.id + '"', function (err, result) {
      if (err) throw reject(err)
      resolve(result)
    })
  })
}

module.exports = {
  getTodosAvaliacaosBD,
  getAvaliacaoBD,
  createAvaliacaoBD,
  deleteAvaliacaoBD,
updateAvaliacaoBD}
