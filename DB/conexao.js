const mysql = require('mysql');

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ufrrj'
});


conexao.connect(function(erro) {
    /*
    if(erro) 
        console.log("Componente BD : ERRO CONEXAO BD: "+erro); 
    else 
        console.log("Componente BD : Conectado ao banco");
    */
});

module.exports = conexao;
