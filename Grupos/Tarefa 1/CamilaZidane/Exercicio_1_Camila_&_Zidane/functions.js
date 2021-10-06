
//Função número 1
function haveTheWord(frase, palavra) {   

    result = frase.indexOf(palavra) > -1;

    return result;
}
//Função número 3
function replace(frase, sinal){
    
    var result = frase.replace(/ /gi, sinal); //gi é pra fazer em todos os lugares q tiver o espaço

    return result;
}
//Função número 4
function reduzir(frase, limite){
    count = 0; //contador de espaço (espaço valor ideal= palavras - 1)
    over  = frase.indexOf(" "); //ver se acabo os espaço 
    indCorte = 0; //(aonde vai ser o ponto de corte)

    while ( (over != -1) && (count != limite - 1) ) { // enquanto tiver espaço e o contador de espaço não chegar ao valor ideal
        count++;
        over = frase.indexOf( " ", over + 1 /* mexer o comparador de string para frente ?*/ );
    }

    indCorte = over; 
     
    result = frase.substring(0, indCorte); //corta do índice 0 até o índice de corte

    if (over == -1){
        result = frase;
    }
  
    
    return result;
}
//Função número 7
function mistura(vetor1, vetor2){

    var misturado = vetor1.concat( vetor2)

    var result = misturado.filter( function( elem, i, misturado ) {
    return result = misturado.indexOf( elem ) === i;
    });

    return result;
}

function manyVowels(frase){

    function isVowel(aux){
        var pattern = /[aeiouAEIOU]/
        return pattern.test(aux);

    }
    
    var count = 0;
        
    for(var i = 0; i < frase.length; ++i){
        if (isVowel(frase[i])){
            count++;
        }
        
     }
    

    result = count;
    return result;
    
        
}

module.exports = {
    haveTheWord,
    replace,
    reduzir,
    mistura,
    manyVowels
  }
  