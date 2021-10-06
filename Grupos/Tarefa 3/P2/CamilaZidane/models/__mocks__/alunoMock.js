const aluno = jest.createMockFromModule('../alunoModel.js');


function getTodosAlunos() {

    return new Promise(function(resolve, reject) {

        

        resolve([

            { nome:'Zidane',    matricula: '2017390077'},
            { nome:'Cristovão', matricula: '2017390078'},
            { nome:'Camila',    matricula: '2017390214'},
            { nome:'Alexia',    matricula: '2017390895'},
        
            ]);

    });
  
}

function getAluno(matricula) {
    
    
    return new Promise(function(resolve, reject) {

        

        resolve({

            nome:'Zidane', 
            matricula: 2017390077

        });

    });

}

function createAluno(aluno) {
        return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deleteAluno(aluno) {
        return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updateAluno(aluno) {
        return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}





module.exports = {
    getAluno,
    getTodosAlunos,
    createAluno,
    deleteAluno,
    updateAluno
}