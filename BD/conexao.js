const mysql = require('mysql');

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'topicos2022_2'
});

module.exports = conexao;