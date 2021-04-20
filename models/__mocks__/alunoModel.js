
const aluno = jest.createMockFromModule('../alunoModel.js');

function getTodosAlunosBD() {
    //todo incluir promisses
}



function getAlunoBD(matricula) {
    
    return new Promise(function(resolve, reject) {
        
        resolve({
            matricula: 715752,
            nome: 'Abba',
        });
    });
}




module.exports = {
    getAlunoBD,
    getTodosAlunosBD
}