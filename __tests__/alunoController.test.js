
const AlunoController = require('../controllers/alunoController');


/*afterAll( done => {

    // Closing the DB connection allows Jest to exit successfully:
    //conexao.end();
    
})*/


// teste síncrono - #ESTÁ ERRADO - serve apenas como exemplo#
/*
test('get aluno', () => {
    expect(AlunoController.getAluno(701677)).toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
});
*/

// teste assíncrono - teste de integração, exercitando a arquitetura do software
jest.mock('../models/alunoModel.js');

test('get aluno (assíncrono)', () => {
    return AlunoController.getAluno(701677).then(data => {
      expect(data).toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
    });
})

// teste síncrono - outra forma 
/*
test('get aluno (assíncrono)', () => {
   return expect(AlunoController.getAluno(701677)).resolves.toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
});
*/

// teste de integração, exercitando a arquitetura do software

test('comportamento reject de get aluno - aluno não encontrado', () => {
   return expect(AlunoController.getAluno(7016794)).rejects.toMatch('Nenhum aluno com esta matrícula encontrado');
});
