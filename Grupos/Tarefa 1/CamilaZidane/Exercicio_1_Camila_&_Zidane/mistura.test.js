// Exemplo JEST com múltiplos casos de teste a partir de arquivo JSON
const functions = require('./functions');
const fs = require('fs');


var casosDeTeste = JSON.parse(fs.readFileSync('casoDeTesteMistura.json', 'utf8'));

//"algoritmo"
//var resultadoEsperado = casoTeste.entrada1/casoTeste.entrada2;

casosDeTeste.forEach(function (casoTeste) {
    test('A junção do vetor\n ' + casoTeste.vetor1 + '\n com o vetor' + casoTeste.vetor2 + '?\n gera o vetor sem duplicações :' + casoTeste.result + '\n', () => {
        expect(functions.mistura(casoTeste.vetor1, casoTeste.vetor2)).toStrictEqual(casoTeste.result);
        });
});


