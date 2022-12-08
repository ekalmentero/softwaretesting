const arquivos = require('../modulo_arquivo');
jest.mock('fs');



test('arquivos', () => {
    
    expect(arquivos.listarArquivos('arquivos')).toContain('arq1.txt'); //elementos do domínio de entrada: 10,5 e 14 elementos do domínio de saída: 7.5

    
})