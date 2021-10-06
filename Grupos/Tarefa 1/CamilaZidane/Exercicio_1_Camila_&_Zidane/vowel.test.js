// Exemplo JEST com múltiplos casos de teste a partir de arquivo JSON
const functions = require('./functions');
const fs = require('fs');


var casosDeTeste = JSON.parse(fs.readFileSync('casoDeTesteVowel.json', 'utf8'));

//"algoritmo"
//var resultadoEsperado = casoTeste.entrada1/casoTeste.entrada2;

casosDeTeste.forEach(function (casoTeste) {
    test('A frase: ' + casoTeste.frase + '  possui: '  + casoTeste.result + ' vogais \n', () => {
        expect(functions.manyVowels(casoTeste.frase)).toBe(casoTeste.result);
        });
});


