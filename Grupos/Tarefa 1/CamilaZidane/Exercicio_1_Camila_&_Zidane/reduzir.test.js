// Exemplo JEST com múltiplos casos de teste a partir de arquivo JSON
const functions = require('./functions');
const fs = require('fs');


var casosDeTeste = JSON.parse(fs.readFileSync('casoDeTesteReduzir.json', 'utf8'));

//"algoritmo"
//var resultadoEsperado = casoTeste.entrada1/casoTeste.entrada2;

casosDeTeste.forEach(function (casoTeste) {
    test('As frase "' + casoTeste.frase + '" possuindo apenas as suas ' + casoTeste.limite + 'º palavras, fica: \n' + casoTeste.result + '\n', () => {
        expect(functions.reduzir(casoTeste.frase, casoTeste.limite)).toBe(casoTeste.result);
        });
});


