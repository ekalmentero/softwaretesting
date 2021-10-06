/*
  Escrever uma função que parametrize uma string
  Exemplo entrada: “hoje é dia de aula remota”
  Exemplo saída: hoje-é-dia-de-aula-remota
*/
function ex3(text) {
  if (typeof text == "string") return text.split(" ").join("-");
  else return "";
}

/*
  Escreva uma função para truncar uma frase dado um determinado número de palavras
  Exemplo entrada: “hoje é meu dia preferido de aula remota”, 5
  Exemplo saída: “hoje é meu dia preferido”
*/
function ex4(text, number) {
  let truncate_array = typeof text == "string" ? text.split(" ") : [];
  let new_array = [];
  for (i = 0; i < number; i++) {
    new_array.push(truncate_array[i]);
  }
  return new_array.join(" ").trim();
}

/*
  Escreve uma função que tenha como entrada um número e insira um traço (“-“) entre dois números pares
  Exemplo entrada: 2876418
  Exemplo saída: 2-876-418
*/
function ex5(number) {
  if (!isNaN(parseFloat(number) && isFinite(number))) {
    let number_array = String(parseFloat(number)).split("");
    let formated_number = "";
    for (i = 0; i < number_array.length; i++) {
      if (
        Number(number_array[i]) % 2 == 0 &&
        Number(number_array[i + 1]) % 2 == 0
      )
        formated_number += number_array[i] + "-";
      else formated_number += number_array[i];
    }
    return formated_number;
  } else return 0;
}

/*
  Escreva uma função que faça o merge de dois arrays e remova os elementos duplicados.
  Exemplo entrada: [8, 4, 5, 7], [3, 2, 1, 8]
  Exemplo saída: [8, 4, 5, 7, 3, 2, 1]
*/

function ex7(arr, arr2) {
  if (Array.isArray(arr) && Array.isArray(arr2)) {
    let aux = arr.concat(arr2);
    return unique(aux);
  } else if (Array.isArray(arr)) return unique(arr);
  else if (Array.isArray(arr2)) return unique(arr2);
  else return [];
}
// Função auxiliar do exercício 7, remove dados repetidos em um array
function unique(array) {
  return array.filter(function (a, i) {
    return array.indexOf(a) === i;
  });
}

//Escreva uma função que calcule o número de vogais em uma string//

function ex8(str){
    
   
  let arr_vowel_list = 'aeiouáéíóúàãõêâôÁÉÍÓÚÃÕÀÂÊÔAEIOU'.split(''); 
  let count = 0;
  str.split('').forEach(function(e){
  if(arr_vowel_list.indexOf(e) !== -1){
   count++;} });


   return count;
  
}

/*
Escreva uma função que some os dígitos do número recebido por parâmetro. Se o resultado
desta soma for um número par, a função deve retornar “soma par”, caso contrário, se o
resultado da soma for um número ímpar, a função deve retornar “soma ímpar” */

function ex9(number) {

  let sum = 0;
  while (number) {
      digit = number % 10;
      sum += digit;
      number = (number - digit) / 10;
  }

  if(sum % 2 == 0){
     return 'Soma par';
  } else {
      return 'Soma ímpar';
    }
}


module.exports = { ex3, ex4, ex5, ex7, ex8, ex9};
