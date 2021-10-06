const fs = require("fs");
const path = require("path");
const turmaModel = require("../models/turma.js");
const turmasTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/__mocks__/turmas.json"))
);

jest.mock("../models/turma.js");

test("Teste de get Turma By Codigo Mock", () => {
  expect(turmaModel.getTurmaByCodigo(123456)).toEqual({
    turma_ID: 1,
    codigo: 123456,
    disciplina_ID: 1,
    professor_ID: 1,
    periodo_ID: 1,
  });
});

test("Teste de get Turma Mock", () => {
  expect(turmaModel.getTurmas()).toEqual(turmasTodos);
});

test("Criar Turma Mock", () => {
  return turmaModel
    .createTurma({
      turma_ID: 5,
      codigo: 54321,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
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

test("Criar Turma Quebrada Mock", () => {
  return turmaModel
    .createTurma({
      turma_ID: 655656565626556,
      codigo: 655656565626556,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Turma não criada" });
    });
});

test("Editar Turma Mock", () => {
  return turmaModel
    .updateTurma(1, {
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
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Editar Turma Quebrada Mock", () => {
  return turmaModel
    .updateTurma(1, {
      turma_ID: 655656565626556,
      codigo: 655656565626556,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Turma não alterada" });
    });
});

test("Editar Turma inexistente Mock", () => {
  return turmaModel
    .updateTurma(15, {
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

test("Deletar Turma Mock", () => {
  return turmaModel.deleteTurma(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Turma inexistente Mock", () => {
  return turmaModel.deleteTurma(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
