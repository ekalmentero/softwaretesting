
const Aluno = require('../models/aluno');


/*afterAll( done => {

    // Closing the DB connection allows Jest to exit successfully:
    //conexao.end();
    
})*/


// teste síncrono - ESTÁ ERRADO

/*
test('get aluno', () => {
    expect(Aluno.getAlunoBD(701677)).toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
});
*/

// teste assíncrono
/*
test('get aluno (assíncrono)', () => {
    return Aluno.getAlunoBD(701677).then(data => {
      expect(data).toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
    });
})
*/
// teste síncrono - outra forma 

/*
test('get aluno (assíncrono)', () => {
    return expect(Aluno.getAlunoBD(701677)).resolves.toEqual([{"ID": 4, "matricula": "701677", "nome": "Abba"}]);
});
*/

