const aluno = jest.createMockFromModule('../aluno.js');

function getTodos() {
    return [

        { nome: 'Cordey', matricula: 423469 },
        { nome: 'Monique', matricula: 512828 },
        { nome: 'Mort', matricula: 741936 },
        { nome: 'Richie', matricula: 784993 },
        { nome: 'Matteo', matricula: 849586 },
        { nome: 'Prisca', matricula: 904059 },
        { nome: 'Maurizia', matricula: 814481 },
        { nome: 'Steve', matricula: 686898 },
        { nome: 'Caye', matricula: 548739 },
        { nome: 'Durand', matricula: 187782 },
    ];
}

function getAluno(matricula) {
    return ({
        matricula: 548739,
        nome: 'Caye',
    });
}


module.exports = {
    getAluno,
    getTodos
}