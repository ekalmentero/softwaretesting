const media = require('../media');
const mat = require('../mat');

//jest.mock('./mat');


// Testando com a função ('teste de integração')

/* Observação: da forma da forma como está, não é um teste unitário
test('Media aritmética 10, 5 igual a 7.5', () => {
    // um caso de teste
    expect(media.mediaAritmetica([10,5])).toBe(7.5);
});
*/

//Exemplo 1: Atribui uma função mock, que retorna um valor constante, no lugar da original
mat.somaArray = jest.fn(X => 15); //vantagem: simplicidade do comportamento | desvantagem: trabalho maior para gerar casos de teste


//Exemplo 2: reimplementação da função
/*
mat.somaArray = jest.fn((num)=>{ //vantagem: simplicidade em elaborar os casos de teste | desvantagem: (1) trabalho de reimplementar (2) na presença de um defeito, este pode estar relacionado ao comportamento reimplementado!
    var soma = 0;
    for (let index=0; index < num.length; index++){
      soma = soma + num[index];
    }
    return soma;
})
*/
//mat.somaArray = jest.fn(X => 16); 

test('Media aritmética chamada com 5, 10', () => {
    
    mat.somaArray = jest.fn(X => 15); 

    expect(media.mediaAritmetica([10,5])).toBe(7.5); //elementos do domínio de entrada: 10,5 e 14 elementos do domínio de saída: 7.5
    
    //media.mediaAritmetica([6,10]);
    //expect(mat.somaArray).toHaveBeenCalledWith([6,10]);
    expect(mat.somaArray).toHaveBeenCalled();
})