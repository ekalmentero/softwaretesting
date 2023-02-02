const mysql = require('mysql');

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ufrrj'
});

module.exports = conexao;