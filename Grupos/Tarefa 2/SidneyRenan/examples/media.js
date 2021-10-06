const mat = require('./mat');

function mediaAritmetica(notas){
    var soma = mat.somaArray(notas);
    return soma/notas.length;
}

  
function mediaPonderada(notas){
    //todo
}

module.exports = {
    mediaAritmetica,
    mediaPonderada    
}
