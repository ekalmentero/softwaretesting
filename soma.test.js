const mat = require('./mat');

let casosDeTeste = [
    {
        "entrada1":5,
        "entrada2":2,
        "saida":7
    },
    {
        "entrada1":8,
        "entrada2":2,
        "saida":10
    },
    {
        "entrada1":8,
        "entrada2":2,
        "saida":10
    },
    {
        "entrada1":5,
        "entrada2":1,
        "saida":6
    }

]

casosDeTeste.forEach(function (casoTeste) {
    test('Soma ' + casoTeste.entrada1 + ' + ' + casoTeste.entrada2 + ' igual a ' + casoTeste.saida, () => {
        expect(mat.soma(casoTeste.entrada1, casoTeste.entrada2)).toBe(casoTeste.saida);
        });
});