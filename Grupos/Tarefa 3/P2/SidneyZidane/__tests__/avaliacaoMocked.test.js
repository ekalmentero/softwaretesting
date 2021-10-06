const fs = require("fs");
const path = require("path");
const avaliacaoModel = require("../models/avaliacao.js");
const avaliacoesTodos = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../models/__mocks__/avaliacoes.json")
  )
);

jest.mock("../models/avaliacao.js");

test("Teste de get Avaliacao by ID", () => {
  expect(avaliacaoModel.getAvaliacaoByID(1)).toEqual({
    avaliacao_ID: 1,
    turma_ID: 1,
    aluno_ID: 1,
    nota: 10,
    peso: 1,
  });
});

test("Teste de get Avaliacao Mock", () => {
  expect(avaliacaoModel.getAvaliacoes()).toEqual(avaliacoesTodos);
});

test("Criar Avaliacao Mock", () => {
  return avaliacaoModel
    .createAvaliacao({
      avaliacao_ID: 7,
      turma_ID: 2,
      aluno_ID: 3,
      nota: 9,
      peso: 2,
    })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Criar Avaliacao Quebrada Mock", () => {
  return avaliacaoModel
    .createAvaliacao({
      avaliacao_ID: 214748364777777,
      turma_ID: 1,
      aluno_ID: 3,
      nota: 9,
      peso: 2,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Avaliacao não criada" });
    });
});

test("Editar Avaliacao Mock", () => {
  return avaliacaoModel
    .updateAvaliacao(7, {
      turma_ID: 1,
      aluno_ID: 3,
      nota: 9,
      peso: 2,
    })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Editar Avaliacao Quebrada Mock", () => {
  return avaliacaoModel
    .updateAvaliacao(1, {
      turma_ID: 214748364777777,
      codigo: 12,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Avaliacao não alterada" });
    });
});

test("Editar Avaliacao inexistente Mock", () => {
  return avaliacaoModel
    .updateAvaliacao(15, {
      turma_ID: 1,
      codigo: 123456,
      disciplina_ID: 2,
      professor_ID: 2,
      periodo_ID: 2,
    })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 0,
          }),
        ])
      );
    });
});

test("Deletar Avaliacao Mock", () => {
  return avaliacaoModel.deleteAvaliacao(3).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Avaliacao inexistente Mock", () => {
  return avaliacaoModel.deleteAvaliacao(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
