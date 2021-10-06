var sqlite = require('sqlite-sync') 

// Connecting - if the file does not exist it will be created
sqlite.connect('alunos.db')


function getAluno(matricula){
  try {
      let alunoEncontrado= sqlite.run(`SELECT NAME, matricula FROM alunos WHERE matricula = ?`, [matricula]);
      
      return alunoEncontrado;
      
  } catch (erro) {
      console.error(erro);
      return;
  }
}

function getTodos(){
  try {
      let todosAlunos = [];
      let resultado= sqlite.run(`SELECT NAME, matricula FROM alunos`, []);  
      resultado.forEach((resultados) => {
          let aluno = {
              nome: resultados.NAME,
              matricula: resultados.matricula
          };
          todosAlunos.push(aluno);
      });
      return todosAlunos;      
  } catch (erro) {
      console.error(erro);
      return;
  }
}


module.exports = {
    getAluno,
    getTodos
}

// Closing connection 
sqlite.close()