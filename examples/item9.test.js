const funcoes = require('./funcoes');

let casos = [{
    "entrada": 509057542,
    "saida": 'soma ímpar'
  }, {
    "entrada": 9622604989,
    "saida": 'soma ímpar'
  }, {
    "entrada": 753228573,
    "saida": 'soma par'
  }, {
    "entrada": 5833823822,
    "saida": 'soma par'
  }, {
    "entrada": 3431213326,
    "saida": 'soma par'
  }, {
    "entrada": "adadgadg        ad g adg ^ $ 1",
    "saida": 'Entrada inválida'
  }, {
    "entrada": 3487860046,
    "saida": 'soma par'
  }, {
    "entrada": 2366179501,
    "saida": 'soma par'
  }, {
    "entrada": 1494031430,
    "saida": 'soma ímpar'
  }, {
    "entrada": 2087768305,
    "saida": 'soma par'
  }, {
    "entrada": 2475467831,
    "saida": 'soma ímpar'
  }, {
    "entrada": 6243584888,
    "saida": 'soma par'
  }, {
    "entrada": 1983441924,
    "saida": 'soma ímpar'
  }, {
    "entrada": 1709544185,
    "saida": 'soma par'
  }, {
    "entrada": 9999812147,
    "saida": 'soma ímpar'
  }, {
    "entrada": 987246474,
    "saida": 'soma ímpar'
  }, {
    "entrada": 4956389223,
    "saida": 'soma ímpar'
  }, {
    "entrada": 2889679567,
    "saida": 'soma ímpar'
  }, {
    "entrada": "             ",
    "saida": 'Entrada inválida'
  }, {
    "entrada": 3749936599,
    "saida": 'soma par'
  }, {
    "entrada": 2480308033,
    "saida": 'soma ímpar'
  }, {
    "entrada": 9136922372,
    "saida": 'soma par'
  }, {
    "entrada": 4565417456,
    "saida": 'soma ímpar'
  }, {
    "entrada": 9503404553,
    "saida": 'soma par'
  }, {
    "entrada": 1958156309,
    "saida": 'soma ímpar'
  }, {
    "entrada": 7521151711,
    "saida": 'soma ímpar'
  }, {
    "entrada": 4530769728,
    "saida": 'soma ímpar'
  }, {
    "entrada": 6273776894,
    "saida": 'soma ímpar'
  }, {
    "entrada": "%_#aAa%$$$$_)",
    "saida": 'Entrada inválida'
  }, {
    "entrada": 1664720622,
    "saida": 'soma par'
  }, {
    "entrada": 112091512,
    "saida": 'soma par'
  }, {
    "entrada": 7257584344,
    "saida": 'soma ímpar'
  }, {
    "entrada": 1589997124,
    "saida": 'soma ímpar'
  }];

  casos.forEach(function (caso) {
      let mensagem = 'A soma dos dígitos de ' + caso.entrada + ' é uma ' + caso.saida;
      test(mensagem, () => {
        expect(funcoes.item9(caso.entrada)).toBe(caso.saida);
      });
  });

