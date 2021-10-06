'use strict';

//Usa o mock do módulo original
jest.mock('fs');

//Usa o módulo original
//const fs = require('fs')

const leitor = require('../leitorArquivoParaJSON.js');

test('utilizando mock de módulo do núcleo para teste', () => {
    expect(leitor.lerArquivoParaJSON("caminho")).toEqual({matricula: 111111, nome: 'arquivo mock'});
});

