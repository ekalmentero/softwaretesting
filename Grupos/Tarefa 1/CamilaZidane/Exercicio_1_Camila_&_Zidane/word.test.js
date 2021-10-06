// Exemplo JEST com múltiplos casos de teste a partir de arquivo JSON
const functions = require('./functions');
const fs = require('fs');


var casosDeTeste = JSON.parse(fs.readFileSync('casoDeTesteWord.json', 'utf8'));

//"algoritmo"
//var resultadoEsperado = casoTeste.entrada1/casoTeste.entrada2;

casosDeTeste.forEach(function (casoTeste) {
    test('A frase: ' + casoTeste.frase + 'possui a palavra: ' + casoTeste.palavra + '?\n    ' + casoTeste.result + '\n', () => {
        expect(functions.haveTheWord(casoTeste.frase, casoTeste.palavra)).toBe(casoTeste.result);
        });
});


