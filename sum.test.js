const sum = require('./sum');

let casosDeTeste = [
    {
        "entrada1":5,
        "entrada3":2,
        "saida":7
    },
    {
        "entrada1":8,
        "entrada3":2,
        "saida":10
    },
    {
        "entrada1":5,
        "entrada3":1,
        "saida":6
    }

]




cont = 0;
while (cont < 10){
    cont = cont + 1;
    test('Soma 10 + 20 igual a 30', () => {
    expect(sum(10, 20)).toBe(30);
    });
}