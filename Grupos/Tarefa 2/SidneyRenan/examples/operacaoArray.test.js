
const op = require('./operacaoArray');
const mat = require('./mat');

// *****************************************************

//Atribui uma função mock no lugar da original
const mockCallback = jest.fn(x => x - 5);

// *****************************************************

// *****************************************************

//Exemplo de retorno de valor específico durante o teste
//const mockCallback = jest.fn();

// Valor fixo 
//mockCallback.mockReturnValue(99)

// Valor de acordo com a quantidade de chamadas
//mockCallback.mockReturnValueOnce(11).mockReturnValueOnce(12).mockReturnValueOnce(13).mockReturnValueOnce(14).mockReturnValueOnce(16)

// *****************************************************



var items = [10, 20, 30, 40, 50];

test('Operação array chamada com 10, 20, 30, 40, 50', () => {
    
    op.operacaoArray(items, mockCallback, 10);
  
    // Testando quantas vezes a função mock é chamada. Neste caso, 5 (array de tamanho 5)
    expect(mockCallback.mock.calls.length).toBe(5);

    // O primeiro argumento recebido pela função na segunda chamada é 10 (primeiro elemento do array)
    expect(mockCallback.mock.calls[0][0]).toBe(10);

    // O primero argumento recebido pela função na segunda chamada é 20 (segundo elemento do array)
    expect(mockCallback.mock.calls[1][0]).toBe(20);

    // O segundo argumento recebido pela função na segunda chamada é 10
    expect(mockCallback.mock.calls[1][1]).toBe(10);

    // O valor retornado quando a função é chamada pela primeira vez é 5
    expect(mockCallback.mock.results[0].value).toBe(5);

    expect(op.operacaoArray(items, mockCallback, 10)).toEqual([5, 15, 25, 35, 45]);

});

