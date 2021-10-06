
// Exemplo JEST com múltiplos casos de teste a partir de arquivo JSON

const mat = require('./mat');

const fs = require('fs');

const path = require("path");

var casosDeTeste = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../examples/casosDeTesteMult.json")));

//"algoritmo"
//var resultadoEsperado = casoTeste.entrada1/casoTeste.entrada2;

casosDeTeste.forEach(function (casoTeste) {
    test('Multiplicação ' + casoTeste.entrada1 + ' * ' + casoTeste.entrada2 + ' igual a ' + casoTeste.saida, () => {
        expect(mat.mult(casoTeste.entrada1, casoTeste.entrada2)).toBe(casoTeste.saida);
        });
});