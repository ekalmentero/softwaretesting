
const fs = require('fs');
const path = require("path");

function lerArquivoParaJSON(caminho) {
    const jsonString = fs.readFileSync(path.resolve(__dirname, "../softwaretesting/models/umAluno.json"));
    return JSON.parse(jsonString);
}

module.exports = {
    lerArquivoParaJSON
}



