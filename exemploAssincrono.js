var fs = require('fs');

function getDataAtual(){
    setTimeout(getData, 1000);
    //return getData();
}

function getData() {
    let d = new Date();
    let dataAtualFormatada = d.getHours()+":"+d.getMinutes();
    console.log(dataAtualFormatada);
    return dataAtualFormatada;
}

function lerArquivoJSONAssinc(caminho){
    const minhaPromise = new Promise((resolve, reject) => {
        var arquivoJSON = JSON.parse(fs.readFileSync(caminho, 'utf8'));

        resolve(JSON.stringify(arquivoJSON));
    });
    return minhaPromise;
    
}

function lerArquivoJSONSinc(caminho){
    
    var arquivoJSON = JSON.parse(fs.readFileSync(caminho, 'utf8'));
    return JSON.stringify(arquivoJSON);
    
}



async function getDataSinc(){
    const minhaPromise = new Promise((resolve, reject) => {
        let dataAtual = getData();
        resolve(dataAtual);
    });
    return minhaPromise;
}

module.exports = {
    getDataAtual,
    getDataSinc,
    lerArquivoJSONAssinc,
    lerArquivoJSONSinc
  }