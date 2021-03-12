const http = require('http');
const Aluno = require('./models/aluno');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  listaAlunos = "";

  
  let alunos = Aluno.getAll();

  alunos.forEach(function(aluno){
    listaAlunos = listaAlunos + 
    "Matricula: " + aluno.matricula +"\n"+
    "Primeiro Nome: " + aluno.primeiro_nome + "\n" +
    "Sobrenome: " + aluno.sobrenome +"\n"+
    "Email: " + aluno.email +"\n"+
    "Idade: " + aluno.idade +"\n\n\n"; 
  });
  

 /* let aluno = Aluno.getAluno('3556520586813973');
  console.log(aluno);
 */ 
  res.end(listaAlunos);



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});