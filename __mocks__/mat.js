// mock do módulo mat
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
    return 15;
  }
  
  module.exports = {
    soma,
    sub,
    mult,
    div,
    somaArray
  }