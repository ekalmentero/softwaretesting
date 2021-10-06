const avaliacao = require('../../models/__mocks__/avaliacaoMock')

jest.mock('../../models/avaliacaoModel')


test('Teste de MOCK do getAvaliacaoBD', () => {

  return avaliacao.getAvaliacao(2017390895).then(data => {

    expect(data).toEqual({id: 1,  turma: '04', aluno: '2017390895', peso: 1, peso2: 2, nota: 6, nota2: 5})
  })
})

let todasAvaliacoes = [

  {id: 1,  turma: '04', aluno: '2017390895', peso: 1, peso2: 2, nota: 6, nota2: 5},
  {id: 2,  turma: '05', aluno: '2017390078', peso: 1, peso2: 2, nota: 7, nota2: 6},
  {id: 3,  turma: '07', aluno: '2017390077', peso: 1, peso2: 2, nota: 6, nota2: 8},
  {id: 4,  turma: '09', aluno: '2017390214', peso: 1, peso2: 2, nota: 8, nota2: 9},
  {id: 9,  turma: '05', aluno: '2017390895', peso: 2, peso2: 2, nota: 6, nota2: 8},
  {id: 10, turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10}

]

test('Teste de MOCK do getTodasAvalicoesBD', () => {

  return avaliacao.getTodasAvaliacoes().then(data => {

    expect(data).toEqual(todasAvaliacoes)
  })
})

test('Teste de MOCK do createAvaliacaoBD', () => {

  return avaliacao.createAvaliacao({id: 11, turma: '05', aluno: '2017390895', peso: 1, peso2: 1, nota: 10,nota2: 10}).then(data => {

    expect(data).toEqual(1)
  })
})

test('Teste de MOCK do deleteAvaliacaoBD', () => {
  // tem que ser id (?)
  return avaliacao.deleteAvaliacao(2017390895).then(data => {

    expect(data).toEqual(1)
  })
})

test('Teste de MOCK do updateAvaliacaoBD', () => {

  return avaliacao.updateAvaliacao({id: 4,  turma: '09', aluno: '2017390214', peso: 1, peso2: 2, nota: 8, nota2: 9}).then(data => {

    expect(data).toEqual(1)
  })
})
