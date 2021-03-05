
const media = require('./media');
const mat = require('./mat');

//jest.mock('./mat');


// Testando com a função ('teste de integração')

/*
test('Media aritmética 10, 5 igual a 7.5', () => {
    expect(media.mediaAritmetica([10,5])).toBe(7.5);
});
*/

//Atribui uma função mock no lugar da original
mat.somaArray = jest.fn(X => 14);

test('Media aritmética chamada com 6, 10', () => {
    expect(media.mediaAritmetica([10,5])).toBe(7);
    expect(media.mediaAritmetica([7,5])).toBe(7);
    expect(media.mediaAritmetica([1,5])).toBe(7);
    //media.mediaAritmetica([6,10]);
    //expect(mat.somaArray).toHaveBeenCalledWith([6,10]);
});

