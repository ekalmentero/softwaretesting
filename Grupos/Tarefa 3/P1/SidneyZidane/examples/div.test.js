
// Exemplo JEST reproduzindo o comportamento esperado

const mat = require('./mat');

var a = 10;
var b = 5;

resultadoEsperado = a/b;


test('Subtração 10 dividido por 5 igual a 2', () => {
    expect(mat.div(10, 5)).toBe(resultadoEsperado);
});
