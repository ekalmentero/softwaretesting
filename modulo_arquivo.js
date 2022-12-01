const fs = require('fs');

function listarArquivos (caminho){
    arquivos = fs.readdirSync(caminho);
    return arquivos;
}

module.exports = {
    listarArquivos
  }

