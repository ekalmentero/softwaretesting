function soma(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
      return a - b;
    }
  
  function mult(a, b) {
      return a * b;
    }
  
  function div(a, b){
    return a/b;
  }
  
  function somaArray(num){
    var soma = 0;
    for (let index=0; index < num.length; index++){
        soma = soma + num[index];
    }
    return soma;
  }
  
  module.exports = {
    soma,
    sub,
    mult,
    div,
    somaArray
  }