
const aluno = jest.createMockFromModule('../aluno.js');

function getTodosAlunosBD() {
    return new Promise((resolve, reject) => resolve([
        {nome: 'Brendin Witul', matricula: '257389'},
        {nome: 'Arlyn Lidgate', matricula: '598444'},
        {nome: 'Janie Wornum', matricula: '300427'},
        {nome: 'Pamelina Giovannilli', matricula: '611276'},
        {nome: 'Alfy Craister', matricula: '508010'},
        {nome: 'Quintina Ramelot', matricula: '707824'},
        {nome: 'Arlana Crowth', matricula: '924847'},
        {nome: 'Mar Bransdon', matricula: '880829'},
        {nome: 'Kathlin Steed', matricula: '428208'},
        {nome: 'Harbert Leahy', matricula: '816002'},
        {nome: 'Lezlie Vreiberg', matricula: '607744'},
        {nome: 'Norry Smeeton', matricula: '490081'},
        {nome: 'Marjory Kurtis', matricula: '962555'},
        {nome: 'Temple Hadlee', matricula: '326806'},
        {nome: 'Mickey Behr', matricula: '132461'},
        {nome: 'Bette-ann Hadye', matricula: '285769'},
        {nome: 'Hermie Donavan', matricula: '393463'},
        {nome: 'Sallyann Killingworth', matricula: '183752'},
        {nome: 'Tanney Acaster', matricula: '686199'},
        {nome: 'Valentia Tomson', matricula: '736945'},
    ]));
}

function getAlunoBD(matricula) {
    return new Promise((resolve, reject) => resolve([{matricula: '490081', nome: 'Norry Smeeton'}]));
}

function createAlunoBD(aluno) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function deleteAlunoBD(matricula) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function updateAlunoBD(aluno) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function getAvaliacoesByAluno(matricula) {
    return new Promise((resolve, reject) => resolve([{nota: 10, peso: 2},{nota: 3, peso: 2},{nota: 6, peso: 4},{nota: 1, peso: 2}]));
}

function getAvaliacoesByAlunoByPeriodo(matricula, ano, semestre) {
    return new Promise((resolve, reject) => resolve([{nota: 10, peso: 2},{nota: 3, peso: 2},{nota: 6, peso: 4},{nota: 1, peso: 2}]));
}

function getSituacao(matricula, codigo) {
    return new Promise((resolve, reject) => resolve([{nota: 10, peso: 2},{nota: 3, peso: 2},{nota: 6, peso: 4},{nota: 1, peso: 2}]));
}

module.exports = {
    getAvaliacoesByAluno,
    getAvaliacoesByAlunoByPeriodo,
    getSituacao,
    createAlunoBD,
    deleteAlunoBD,
    updateAlunoBD,
    getAlunoBD,
    getTodosAlunosBD
}