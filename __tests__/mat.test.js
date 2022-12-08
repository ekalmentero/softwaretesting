//Teste utilizando mock de módulo jest

jest.mock('../mat');

const media = require('./media');

test('Teste utilizando mock de módulo', () => {
   
    expect(media.mediaAritmetica([10,5])).toBe(7.5);

          
})