const conexao = require('../DB/conexao.js')


function calcularCRTotalBD(alunoMatricula){
    return new Promise(function(resolve, reject) {
        conexao.query('SELECT peso, peso2, nota, nota2 FROM avaliacao WHERE aluno ='+alunoMatricula, function (err, result) {
            if (err) throw reject(err);
            
            resolve(result);
        });
    });

}


function calcularCRPeriodoBD(alunoMatricula, ano, semestre){
    return new Promise(function(resolve, reject) {
        
            conexao.query('SELECT periodo.id, avaliacao.nota, avaliacao.nota2, avaliacao.peso, avaliacao.peso2 FROM avaliacao INNER JOIN turma ON avaliacao.turma = turma.codigo INNER JOIN periodo ON turma.periodo = periodo.id WHERE avaliacao.aluno = '+alunoMatricula+' AND periodo.ano = '+ano+' AND periodo.semestre =' +semestre, function (err, result) {
                                    
                if (err) throw reject(err);
                resolve(result);
            });
    });
}


function calcularMediaDisciplinaBD(alunoMatricula, turma){
    return new Promise(function(resolve, reject) {
        
        conexao.query('SELECT peso, peso2, nota, nota2 FROM avaliacao WHERE aluno = '+alunoMatricula+ ' AND turma = '+turma, function (err, result) {
                                   
            
            if (err) throw reject(err);
            resolve(result);
        });
    });
}



module.exports = {
    calcularCRTotalBD,
    calcularCRPeriodoBD,
    calcularMediaDisciplinaBD,
}
