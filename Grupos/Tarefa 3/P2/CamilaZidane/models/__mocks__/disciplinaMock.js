const disciplina = jest.createMockFromModule('../DisciplinaModel.js');


function getTodasDisciplinas() {

return new Promise(function(resolve, reject) {

    resolve([

        { codigo:'001',     nome: 'BD1'},
        { codigo:'002',     nome: 'LP2'},
        { codigo:'003',     nome: 'AED1'},
        { codigo:'004',     nome: 'SO'},
        { codigo:'benzema', nome: '00001'},
        
    ]);

    });    
}

function getDisciplina(codigo) {

return new Promise(function(resolve, reject) {

    resolve({

    codigo:'001',
        nome: 'BD1'

    });

});

}

function createDisciplina(diciplina) {
            return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function deleteDisciplina(codigos) {
            return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

function updateDisciplina(diciplina) {
            return new Promise(function(resolve, reject) {

        

        resolve(1);

    });
}

module.exports = {
    getDisciplina,
    getTodasDisciplinas,
    createDisciplina,
    deleteDisciplina,
    updateDisciplina
}