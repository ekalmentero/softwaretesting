
//Exemplo simples JEST

const mat = require('./mat');

test('Subtração 10 - 5 igual a 5', () => {
    expect(mat.sub(10, 5)).toBe(5);
});
