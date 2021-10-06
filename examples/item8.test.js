const funcoes = require('./funcoes');

let casos = [{
  "entrada": "Maï",
  "saida": '2 vogais'
}, {
  "entrada": "Pål",
  "saida": '1 vogal'
}, {
  "entrada": "Mårten",
  "saida": '2 vogais'
}, {
  "entrada": "Almérinda",
  "saida": '4 vogais'
}, {
  "entrada": "Séréna",
  "saida": '3 vogais'
}, {
  "entrada": "Mélia",
  "saida": '3 vogais'
}, {
  "entrada": "Vérane",
  "saida": '3 vogais'
}, {
  "entrada": "Méthode",
  "saida": '3 vogais'
}, {
  "entrada": "Dafnée",
  "saida": '3 vogais'
}, {
  "entrada": "5+548454      054545 @ __ ^$",
  "saida": 'Frase inválida'
}, {
  "entrada": "Åsa",
  "saida": '2 vogais'
}, {
  "entrada": "Cunégonde",
  "saida": '4 vogais'
}, {
  "entrada": "Aurélie",
  "saida": '5 vogais'
}, {
  "entrada": "Maëlle",
  "saida": '3 vogais'
}, {
  "entrada": "Stévina",
  "saida": '3 vogais'
}, {
  "entrada": "Lucrèce",
  "saida": '3 vogais'
}, {
  "entrada": "Gaétane",
  "saida": '4 vogais'
}, {
  "entrada": "Fèi",
  "saida": '2 vogais'
}, {
  "entrada": "Vérane",
  "saida": '3 vogais'
}, {
  "entrada": "Björn",
  "saida": '1 vogal'
}, {
  "entrada": "Marylène",
  "saida": '3 vogais'
}, {
  "entrada": "Gaëlle",
  "saida": '3 vogais'
}, {
  "entrada": "                             ",
  "saida": 'Frase inválida'
}, {
  "entrada": "Mégane",
  "saida": '3 vogais'
}, {
  "entrada": "Cléa",
  "saida": '2 vogais'
}, {
  "entrada": "Faîtes",
  "saida": '3 vogais'
}, {
  "entrada": "Annotés",
  "saida": '3 vogais'
}, {
  "entrada": "Inès",
  "saida": '2 vogais'
}, {
  "entrada": "Zoé",
  "saida": '2 vogais'
}, {
  "entrada": "Cloé",
  "saida": '2 vogais'
}, {
  "entrada": "112564872128574897231248745",
  "saida": 'Frase inválida'
}, {
  "entrada": "Pélagie",
  "saida": '4 vogais'
}, {
  "entrada": "Mahélie",
  "saida": '4 vogais'
}];

  casos.forEach(function (caso) {
      let mensagem = 'A quantidade de vogais na frase:\n"' + caso.entrada + '"\né igual a: ' + caso.saida;
      test(mensagem, () => {
        expect(funcoes.item8(caso.entrada)).toBe(caso.saida);
      });
  });

