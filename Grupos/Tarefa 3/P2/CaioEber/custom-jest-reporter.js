const conexao = require('./DB/conexao.js');

class MyCustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
        console.log("Limpando a base de dados dos testes feitos...");

        const promise = new Promise((resolve, reject) => {
            conexao.query('delete from professor where id>2; delete from aluno where id>20;delete from disciplina where id>5;delete from periodo where id>3;delete from turma where id>5;delete from avaliacao where id>300;', function(err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });

        promise.then((onResolved) => console.log("Base limpa com sucesso."), (onRejected) => console.log("Erro ao limpar base."));
    }
}
  
module.exports = MyCustomReporter;